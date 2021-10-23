const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://i.pinimg.com/originals/3f/ed/52/3fed522a9f74fc39d4c265ab17a82267.gif",
            "https://media0.giphy.com/media/ree8xCap5nHi/200.gif",
            "https://media.tenor.com/images/f4273baaa0b2493f1c4b2d4ed32aaa9c/tenor.gif",
            "https://i.pinimg.com/originals/6c/22/43/6c2243fcf5eec62d6c43e5078c30b1ca.gif",
            "https://media.tenor.com/images/2d8020a82e36be2a73b41e1de6163b7a/tenor.gif",
            "https://media.tenor.com/images/d8cfad6474c16477362df878df5aba70/tenor.gif",
            "https://i.pinimg.com/originals/a5/a8/1d/a5a81d85845eb95af410489863acf407.gif",
            "https://cdn72.picsart.com/186168594000202.gif",
            "https://i.gifer.com/D1wh.gif",
            "https://i.pinimg.com/originals/c8/d3/21/c8d3217f2698e93abbeaee7d53d82289.gif",
            "https://i.gifer.com/285U.gif"
        ]
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} sourit ^^`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'smile',
    help : {
        description : 'Cette commande permet de faire un sourrir ^^.'
    }
}