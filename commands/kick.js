const Discord = require('discord.js')

module.exports = {
    run : async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner un utilisateur.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas kick le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas kick ce membre.')
        if (!member.kickable) return message.channel.send('Navré je n\'ai pas la permission de kick ce membre.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie.'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} a été kick de ce serveur !`)
    },
    name : "kick",
    guildOnly : true,
    help : {
        description : 'Cette commande permet d\'eclure un membre.',
        syntax : '<@utilisateur> [raison]'
    }
}