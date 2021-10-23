const Discord = require('discord.js')

module.exports = {
    run: async (message, args) => {
        let server = message.guild.id
        if (server != 825462148087545907) return message.channel.send(`**Vous devez effectuer cette commande sur mon serveur support ^^**\n  **↬** https://discord.gg/g8qJWnN3mW`)
        let role = message.guild.roles.cache.get("825465170288705536")
        let member = message.member
        member.roles.add(role).catch(console.error)
        message.channel.send(`${member} a reçu le rôle **🍙 | Toka Fan** ! ^^`)
    },
    name: 'fan',
    guildOnly: true,
    help : {
        description : 'Cette commande permet d\'avoir le rôle de fan sur mon serveur support ^^.'
    }
}