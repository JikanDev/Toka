const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://media.tenor.com/images/38fff1193d3535d83a3e4d73f032ef61/tenor.gif",
            "https://thumbs.gfycat.com/IncredibleTeemingAfricanelephant-max-1mb.gif",
            "https://media0.giphy.com/media/rY3YFw3JfUK88/giphy.gif",
            "https://media.tenor.com/images/4e548e93b7e5f0842578a755472796ee/tenor.gif",
            "https://thumbs.gfycat.com/SandyTheseAmericanwarmblood-small.gif",
            "https://media.tenor.com/images/bdfa7ee2dd664119126e54c98d06a1f0/tenor.gif",
            "https://thumbs.gfycat.com/CapitalDarlingBlackcrappie-size_restricted.gif",
            "https://media.tenor.com/images/4f032a0a3c1432f0ec43acfa8a5b0515/tenor.gif",
            "https://media1.giphy.com/media/bOCMPVgsVnRT2/giphy.gif",
            "https://gifimage.net/wp-content/uploads/2017/09/baka-gif-8.gif",
            "https://thumbs.gfycat.com/OnlyConsiderateDogwoodclubgall-size_restricted.gif",
            "https://media.tenor.com/images/d8f29a80746cb20031bb069bd1b0de17/tenor.gif",
            "https://i.pinimg.com/originals/37/8e/b5/378eb5d8f3e5185ee68deed8894d3f9f.gif",
            "https://cdn.weeb.sh/images/Skq_FXWqm.gif",
            "https://cdn.weeb.sh/images/H12Btmb5Q.gif",
            "https://cdn.weeb.sh/images/ByDPFm-cm.gif",
            "https://cdn.weeb.sh/images/BkILKXWqX.jpeg"
        ]
        const user = message.mentions.users.first() || message.author
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${user.username} est un(e) baka !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'baka',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de dire baka à quelqu\'un.',
        syntax : 'ou *baka [@membre]'
    }
}