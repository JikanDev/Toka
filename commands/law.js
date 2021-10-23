const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`La loi, c'est la loi.`)
        .setImage('https://media1.tenor.com/images/4cf2809f0f56cec35bc7b07758613fa7/tenor.gif')
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'law',
    help : {
        description : 'Cette commande permet de dire The law is the law.'
    }
}