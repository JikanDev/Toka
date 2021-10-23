const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://thumbs.gfycat.com/HopefulFabulousKouprey-max-1mb.gif",
            "https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif",
            "https://i.pinimg.com/originals/e0/0f/31/e00f3104927ae27d7d6a32393d163176.gif",
            "https://i.pinimg.com/originals/8c/ab/4f/8cab4f4c73547d077c56066461c40a5e.gif",
            "https://media1.tenor.com/images/ba1841e4aeb5328e41530d3289616f46/tenor.gif",
            "https://media2.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
            "https://acegif.com/wp-content/uploads/anime-kiss-32.gif",
            "https://i.pinimg.com/originals/56/0b/b3/560bb37b1596f48d93a76db4f87dc2f9.gif",
            "https://thumbs.gfycat.com/IdolizedAnxiousAcouchi-small.gif",
            "https://acegif.com/wp-content/uploads/anime-kiss-m.gif",
            "https://d.wattpad.com/story_parts/324/images/1462b50fb380f780689293669071.gif",
            "https://i0.wp.com/nileease.com/wp-content/uploads/2021/01/12518b3a53be565d41e2ae77f32fb270.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre que vous souhaitez embrasser (AntiCovid certifié ^^).')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} embrasse ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'kiss',
    guildOnly: true,
    help : {
        description : 'Cette commande permet d\'embrasser quelqu\'un (AntiCovid certifié ^^).',
        syntax : '<@membre>'
    }
}