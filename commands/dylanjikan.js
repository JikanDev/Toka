const config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (message.author.id != "372092164458676225") return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if (!args[0]) return message.channel.send('Veuillez indiquer du texte à envoyer.')
        message.delete()
        client.users.cache.get("674321543836467221").send('Message de ' + message.author.username + ' : ' + message.content.trim().slice(`${config.prefix}dylanjikan`.length))
    },
    name: 'dylanjikan',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de parler à Dylan.',
        syntax : '<texte à dire>'
    }
}
