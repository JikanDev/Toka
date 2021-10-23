const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://rrowbyte.files.wordpress.com/2016/08/ubi6jth.gif?w=392",
            "https://37.media.tumblr.com/200bffe857984a4edb7691e478019130/tumblr_nadcgtKOXE1s3wjuno1_400.gif",
            "https://i.skyrock.net/4117/96344117/pics/3268969112_1_15_UNtznNaH.gif",
            "https://media3.giphy.com/media/BTV1vUcOWht2U/giphy.gif",
            "https://media.giphy.com/media/11HeubLHnQJSAU/giphy.gif",
            "https://media.giphy.com/media/3F9duvK4t9hzW/giphy.gif",
            "https://media.giphy.com/media/eLsxkwF5BRtlK/giphy.gif",
            "https://media.giphy.com/media/XRr6w71DZxXig/giphy.gif",
            "https://media.giphy.com/media/loXSLhmBsORXaOBXpH/giphy.gif",
            "https://media.giphy.com/media/yy1rPT45jdX1K/giphy.gif",
            "https://media.giphy.com/media/12wkaD1nh3XsFG/giphy.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre que vous souhaitez tuer.')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Nouveau meurtre sur le serveur')
        .setDescription(`${message.author.username} a tué ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'kill',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de tuer fictivement un membre.',
        syntax : '<@membre>'
    }
}