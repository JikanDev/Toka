const Discord = require('discord.js')

module.exports = {
    run: (message, args, clients) => {
    message.channel.send(`**__Voici le lien de mon serveur d'aide/suggestions ^^ :__**\n\nhttps://discord.gg/g8qJWnN3mW\n\nSi vous avez besoin d'aide à propos de moi ou que vous avez des suggestions d'améliorations ou d'ajouts n'hésitez pas à le rejoindre ^^\n\n**Toutes les news à mon propos sont également là-bas ^^**`)
    },
    name: 'support',
    help : {
        description : 'Cette commande vous donne mon lien de mon serveur d\'aide/suggestions.'
    }
}