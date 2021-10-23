const Discord = require('discord.js')

module.exports = {
    run: (message, args, clients) => {
    message.channel.send(`**__Voici les liens de vote ^^ :__**\n\n__Top.gg :__ https://top.gg/bot/823956339868958770\n\n__Discord Bot List :__ https://discord.ly/toka\n\n**Merci beaucoup à tout ceux qui votent ! ^^**`)
    },
    name: 'vote',
    help : {
        description : 'Cette commande vous donne mes liens de vote pour me monter dans le classement des bots ^^.'
    }
}