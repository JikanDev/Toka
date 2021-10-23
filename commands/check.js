const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://media1.tenor.com/images/3a9859e169a7ff166008c268a7359dac/tenor.gif",
            "https://media1.tenor.com/images/457f7bffbb9a4addde0cde02b0d791ac/tenor.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre que vous souhaitez check.')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} te fait un check ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'check',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de faire un check à quelqu\'un.',
        syntax : '<@membre>'
    }
}