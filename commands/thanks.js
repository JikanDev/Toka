const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://media.tenor.com/images/993e52b01a633f9c44868340d92243fe/tenor.gif",
            "https://media.tenor.com/images/2e18df7a2d67e9f3a6a517a7f1c3636a/tenor.gif",
            "https://media.tenor.com/images/caabc706ff7e27e00fb395ca8b3fab60/tenor.gif",
            "https://media.tenor.com/images/525b01e192cb82fc537813984b64febe/tenor.gif",
            "https://i.pinimg.com/originals/35/03/c0/3503c0328bf9d7276c74b41199e18033.gif",
            "https://media.tenor.com/images/e005ce1833616291772b8bf05bde85cb/tenor.gif",
            "https://thumbs.gfycat.com/EnormousRegularClam-size_restricted.gif",
            "https://i.pinimg.com/originals/fd/9d/11/fd9d11fc8e2b9b9570b180a2cf1ecc8c.gif",
            "https://4.bp.blogspot.com/-xq9CShOYMPU/WyNDatR01vI/AAAAAAAfSy8/DTacNiCvOTk6U3E_on1wrbu1pJGhfszaACLcBGAs/s1600/AW1203713_11.gif",
            "https://i.pinimg.com/originals/2c/83/4c/2c834c72d8c6157d9279234352d33e0f.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre que vous souhaitez remercier.')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} te dit merci ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'thanks',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de dire merci à quelqu\'un.',
        syntax : '<@membre>'
    }
}