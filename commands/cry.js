const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://i.pinimg.com/originals/b4/b1/64/b4b1640525ecadfa1030e6096f3ec842.gif",
            "https://media.tenor.com/images/19089cd2b4970740debff2cdfc43329a/tenor.gif",
            "https://media.tenor.com/images/7e623e17dd8c776aee5e0c3e0e9534c9/tenor.gif",
            "https://thumbs.gfycat.com/FaroffMistyBackswimmer-size_restricted.gif",
            "https://i.pinimg.com/originals/d4/96/7f/d4967fd1672fecb50f7f7c400ddef92c.gif",
            "https://media0.giphy.com/media/8YutMatqkTfSE/200.gif",
            "https://thumbs.gfycat.com/WearyCourageousAsianporcupine-small.gif",
            "https://i.imgur.com/DHawcrE.gif",
            "https://i.pinimg.com/originals/f5/ec/64/f5ec64b40d2adf7deb84e3c0e192ff32.gif",
            "http://cdn.lowgif.com/full/6df16158ebb930ec-cry-anime-gif-cry-anime-sad-discover-share-gifs.gif",
            "https://64.media.tumblr.com/92846e2ea2f2e1c54ceae23e78841701/d84de499bfe04042-b5/s540x810/08746dc6027441da5d433e2aac02a987f7861b51.gif"
        ]
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} pleure :(`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'cry',
    help : {
        description : 'Cette commande permet de faire pleurer :(.'
    }
}