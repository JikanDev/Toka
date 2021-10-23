const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://i.pinimg.com/originals/cd/13/ad/cd13adaeb8b4208db2270d7c94963101.gif",
            "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif",
            "https://thumbs.gfycat.com/DefiantBlindHyena-size_restricted.gif",
            "https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif",
            "https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif",
            "https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif",
            "https://media.tenor.com/images/9e7a8a7473f6535081805f0e85b7a09f/tenor.gif",
            "https://cdn78.picsart.com/189414319002202.gif",
            "https://i.gifer.com/B2Sm.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/040/951/73e.gif",
            "http://i.imgur.com/0G5uqlN.gif",
            "http://i.imgur.com/lYxSTLA.gif",
            "https://i.imgur.com/o2SJYUS.gif",
            "http://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre que vous souhaitez taper.')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} donne une baffe à ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'slap',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de taper quelqu\'un.',
        syntax : '<@membre>'
    }
}