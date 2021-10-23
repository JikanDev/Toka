const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://media.tenor.com/images/8558e6840ed3e56887c9894c72164dfe/tenor.gif",
            "https://thumbs.gfycat.com/RawMeaslyGossamerwingedbutterfly-max-1mb.gif",
            "https://media.tenor.com/images/4fc35df68dd9bea240fd332e86cf1364/tenor.gif",
            "https://i.pinimg.com/originals/0e/a3/c2/0ea3c2d7a02de258226762cb09301cea.gif",
            "https://media.tenor.com/images/ccd78878fed944dbaa3a0d9359ff2086/tenor.gif",
            "https://media.tenor.com/images/1032dee260350ae1ee63e8f96c91c923/tenor.gif",
            "https://media.tenor.com/images/fda4938ed265bf972467131a5a4b36be/tenor.gif",
            "https://i.pinimg.com/originals/57/1b/24/571b2421ad9eab05259a0beaad271d25.gif",
            "https://i.pinimg.com/originals/5b/64/d0/5b64d06678325de27e6279388998e923.gif",
            "https://i.pinimg.com/originals/2a/a5/e5/2aa5e54c7559636edeee552aca4f7012.gif",
            "https://i.pinimg.com/originals/36/15/b5/3615b56c452864920fe89f6635f8e2d7.gif",
            "https://i.pinimg.com/originals/a1/35/b5/a135b5843bde70049e2e7200caf7645c.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre à qui vous souhaitez dire bonne nuit.')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} te dit bonne nuit ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'gn',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de dire bonne nuit à quelqu\'un.',
        syntax : '<@membre>'
    }
}