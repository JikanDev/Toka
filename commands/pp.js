const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
            .setImage(`${member.user.displayAvatarURL()}`)
            .setColor("RANDOM")
            .setTitle("PP de l'utilisateur")
            .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'pp',
    help : {
        description : 'Cette commande permet d\'avoir ta photo de profil ou celle de l\'utilisateur mentionné.',
        syntax : 'ou *pp [@utilisateur]'
    }
}