const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers : true,
        partials : ['MESSAGE', 'REACTION']
    }),
    config = require('./config.json'),
    fs  = require('fs')

client.login(config.token)
client.commands = new Discord.Collection()
client.db = require('./db.json')

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    if (message.guild) {
        if (!message.member.hasPermission('MANAGE_CHANNELS') && client.db.lockedChannels.includes(message.channel.id)) return message.delete()
    }
    if (message.content == '<@!823956339868958770>') return message.channel.send("Mon préfixe est `*`\n\nN'hésite pas à faire la commande `*help` ^^")
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLocaleLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utiliser que dans un serveur.')
    command.run(message, args, client)
})

client.on('guildMemberAdd', member => {
    if (member.guild.id == 825462148087545907) {
        member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setTitle('Ohayo !')
        .setDescription(`${member} a rejoint le serveur ! Nous sommes désormais ${member.guild.memberCount} ! 🎉`)
        .setColor('RANDOM')
        .setTimestamp())
        member.roles.add(config.greeting.role)
    } else return
})

client.on('guildMemberRemove', member => {
    if (member.guild.id == 825462148087545907) {
        member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setTitle('Sayonara !')
        .setDescription(`${member.user.tag} a quitté le serveur...`)
        .setColor('RANDOM')
        .setTimestamp())
    } else return
})

client.on('ready', () => {
    console.log("ready")
    const statuses = [
        () => `${client.guilds.cache.size} serveurs !`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs !`,
        () => `faire un *help`,
        () => `créée par Jikan#2712`,
        () => `Toka Community ↬ https://discord.gg/g8qJWnN3mW`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
})

client.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
    })
})