const Discord = require('discord.js')

module.exports = {
    run: async (message, args) => {
        let server = message.guild.id
        if (server != 825462148087545907) return message.channel.send(`**Vous devez effectuer cette commande sur mon serveur support ^^**\n  **↬** https://discord.gg/g8qJWnN3mW`)
        let role = message.guild.roles.cache.get("825464490643947530")
        let member = message.member
        member.roles.add(role).catch(console.error)
        message.channel.send(`${member} a reçu le rôle **📣 | Toka News** ! ^^`)
    },
    name: 'news',
    guildOnly: true,
    help : {
        description : 'Cette commande permet d\'avoir le rôle des news sur mon serveur support ^^.'
    }
}