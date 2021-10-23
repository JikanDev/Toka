const Discord = require('discord.js')

module.exports = {
    run: (message, args, clients) => {
        let début = Date.now()
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong : **${Date.now() - début}** ms`))
    },
    name: 'ping',
    help : {
        description : 'Cette commande permet de savoir votre ping.'
    }
}