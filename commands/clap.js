const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://media.tenor.com/images/b12e29a35e5ede808b6b8038ef687415/tenor.gif",
            "https://media.tenor.com/images/07908bbd4b8336d826c733de9b2f2988/tenor.gif",
            "https://i.pinimg.com/originals/49/5a/99/495a998326b0d98f86287f2793959ba8.gif",
            "https://thumbs.gfycat.com/BigUnfitImago-small.gif",
            "https://media.tenor.com/images/40f77fca1a4ead2923b6cebdfd41f823/tenor.gif",
            "https://i.pinimg.com/originals/d0/5b/2a/d05b2aad6a19944ba378d8e365851f00.gif",
            "https://i.gifer.com/BHLE.gif",
            "https://media.tenor.com/images/657f0c243282921245c0b9f4b1525c1b/tenor.gif",
            "https://i.gifer.com/Px2u.gif",
            "https://thumbs.gfycat.com/GenerousBarrenBluefintuna-small.gif",
            "https://thumbs.gfycat.com/BruisedTidyAsiaticmouflon-max-1mb.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre que vous souhaitez applaudir.')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} te dit bravo ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'clap',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de dire bravo à quelqu\'un.',
        syntax : '<@membre>'
    }
}