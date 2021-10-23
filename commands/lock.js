const fs = require('fs'),
    Discord = require('discord.js')
 
module.exports = {
    run: (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel
        if (client.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon est déjà vérrouillé.')
        client.db.lockedChannels.push(channel.id)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send('Ce salon a été verrouillé !')
    },
    name: 'lock',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de lock un channel. Ceux n\'ayant pas la permission [Gérer les messages] ne peuvent plus écrire dans le dit channel, le bot supprimera les messages de ces membres.',
        syntax : 'dans le channel à lock'
    }
}