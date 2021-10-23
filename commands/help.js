const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help) return message.channel.send('Cette commande n\'existe pas.')
            message.channel.send(new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW')
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .setDescription(`**Commande : ${command.name}**\n\n${command.help.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``))
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('Liste des commandes :')
                .setColor("RANDOM")
                .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW')
                .addField('**Fun/Social**', '`*8ball` `*apple` `*baka` `*bjr` `*bn` `*cat` `*check` `*clap` `*cry` `*dog` `*gd` `*gn` `*hug` `*kill` `*kiss` `*law` `*slap` `*smile` `*thanks`')
                .addField('**Utile**', '`*avatar` `*fan` `*help` `*invite` `*news` `*ping` `*poll` `*pp` `*role-info` `*say` `*server-info` `*support` `*user-info` `*vote`')
                .addField('**Modération**', '`*ban` `*clear` `*kick` `*lock` `*mute` `*tempban` `*tempmute` `*unlock` `*unmute`')
                .setTimestamp()
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription('Pour plus d\'informations sur une commande, tapez `*help [nom de la commande]`'))
        }
    },
    name: 'help',
    help: {
        description: 'Cette commande permet d\'avoir de l\'aide.',
        syntax: '[nom de la commande]'
    }
}
