const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://i.pinimg.com/originals/8f/54/30/8f5430367d6c8ded5778fb1c850021c1.gif",
            "https://i.imgur.com/fHs8bHM.gif",
            "https://thumbs.gfycat.com/EnlightenedHeftyGoldenmantledgroundsquirrel-max-14mb.gif",
            "https://c.tenor.com/DLWGvDkhhyMAAAAj/gray-hair-big-eyes.gif",
            "https://thumbs.gfycat.com/NauticalScaredJaguarundi-small.gif",
            "https://media.tenor.com/images/21f53e7521c2262f778cb71bd671522b/tenor.gif",
            "https://data.whicdn.com/images/233897767/original.gif",
            "https://pa1.narvii.com/6476/3e78b2f1024cda7fce7e928544e3cdf8431a3758_hq.gif",
            "https://thumbs.gfycat.com/ExcitableEducatedEuropeanpolecat-size_restricted.gif",
            "https://i.pinimg.com/originals/d1/0c/3d/d10c3d213be6893235d97ae768db8c07.gif",
            "http://i.imgur.com/kOXnswR.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre à qui vous souhaitez dire bonjour.')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} te dit bonjour ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'bjr',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de dire bonjour à quelqu\'un.',
        syntax : '<@membre>'
    }
}