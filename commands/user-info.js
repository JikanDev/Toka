const Discord = require('discord.js'),
    moment = require('moment')
 
module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
            .addField('Membre', member, true)
            .setColor("RANDOM")
            .addField('Tag', member.user.tag, true)
            .addField('Date de création du compte', moment(member.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Date d\'arrivée sur le serveur', moment(member.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Date de début de boost', member.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YYYY [à] HH:mm:ss') : 'Ne boost pas', true)
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'user-info',
    guildOnly: true,
    help : {
        description : 'Cette commande permet d\'avoir plusieurs informations sur un membre.',
        syntax : 'ou *user-info [@utilisateur]'
    }
}