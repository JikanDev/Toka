const Discord = require('discord.js')

module.exports = {
    run: (message, args, clients) => {
    message.channel.send(`**__Voici mon lien d'invitation ^^ :__**\n\nhttps://discord.com/api/oauth2/authorize?client_id=823956339868958770&permissions=8&scope=bot\n\n*Il est recommandé de me donner la permission 'Administrateur' et de mettre mon rôle le plus haut possible dans la hiérarchie ^^*`)
    },
    name: 'invite',
    help : {
        description : 'Cette commande vous donne mon lien d\'invitation pour que m\'inviter sur votre serveur.'
    }
}