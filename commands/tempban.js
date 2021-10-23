const parseDuration = require('parse-duration'),
     humanizeDuration = require('humanize-duration'),
     Discord = require('discord.js')

module.exports = {
    run : async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner un utilisateur.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir ce membre.')
        if (!member.bannable) return message.channel.send('Navré je ne peux pas bannir ce membre.')
        const duration = parseDuration(args[1])
        if (!duration) return message.channel.send('Veuillez indiquer une durée valide.')
        const reason = args.slice(2).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} a été banni de ce serveur pendant ${humanizeDuration(duration, {language : 'fr'})} !`)
        setTimeout(() => {
            message.guild.members.unban(member)
            message.channel.send(`${member.user.tag} a été débanni.`)
        },duration)
    },
    name: 'tempban',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de bannir temporairement un membre.',
        syntax : '<@utilisateur> <durée du ban> [raison du ban]'
    }
}