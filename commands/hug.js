const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
            "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif",
            "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
            "https://media4.giphy.com/media/PHZ7v9tfQu0o0/200.gif",
            "https://thumbs.gfycat.com/BlueDecimalAardwolf-small.gif",
            "https://media1.tenor.com/images/1d94b18b89f600cbb420cce85558b493/tenor.gif",
            "https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif",
            "https://thumbs.gfycat.com/DangerousSmallIsabellineshrike-size_restricted.gif",
            "https://media2.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
            "https://media.tenor.com/images/8d33eeee359d0453de52c5779dd23c46/tenor.gif",
            "https://thumbs.gfycat.com/ShowyObedientCrane-max-1mb.gif",
            "https://i.imgur.com/r9aU2xv.gif?noredirect",
            "http://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif",
            "https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif",
            "https://media1.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
            "https://i.pinimg.com/originals/24/3c/70/243c7004583c865a21a89300dbc4fdd8.gif",
            "https://thumbs.gfycat.com/AlienatedEmbarrassedBullfrog-size_restricted.gif",
            "https://i.imgur.com/XEs1SWQ.gif",
            "https://acegif.com/wp-content/gif/anime-hug-73.gif",
            "https://media4.giphy.com/media/sUIZWMnfd4Mb6/200.gif",
            "https://thumbs.gfycat.com/BigBeautifulBactrian-size_restricted.gif"
        ]
        const user = message.mentions.users.first()
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        if (!user) {
            return message.channel.send('Veuillez mentionner le membre que vous souhaitez câliner.')
        }
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${message.author.username} fait un calin à ${user.username} !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'hug',
    guildOnly: true,
    help : {
        description : 'Cette commande permet de câliner quelqu\'un (AntiCovid certifié ^^).',
        syntax : '<@membre>'
    }
}