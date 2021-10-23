const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://media.tenor.com/images/17393377dd522ccdb3bd4dacb853ed4a/tenor.gif",
            "https://media1.tenor.com/images/e48e11d7831ab2d4b360613a7fa89bd0/tenor.gif",
            "https://media1.tenor.com/images/f6fe8d1d0463f4e51b6367bbecf56a3e/tenor.gif",
            "https://media1.tenor.com/images/9aff61f84e20f9da4f5e958a4d6f1bed/tenor.gif",
            "https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif",
            "https://i.pinimg.com/originals/34/4e/5e/344e5e5a8bd893d871e2ec04d8b2ae5c.gif",
            "https://media0.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy-downsized.gif",
            "https://media.tenor.com/images/75b3c8eca95d917c650cd574b91db7f7/tenor.gif",
            "https://thumbs.gfycat.com/CalculatingDearIberianmole-size_restricted.gif",
            "https://media0.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif",
            "https://thumbs.gfycat.com/AdmirableCloseBlackbuck-max-1mb.gif",
            "https://media1.giphy.com/media/dz1iM8gU3RhzQy2MC7/giphy-downsized-large.gif",
            "https://i.pinimg.com/originals/cf/69/54/cf6954e72c5fd2d773297deb8dc66fca.gif",
            "https://media0.giphy.com/media/jUKBVRKJwoB9fC8g8p/giphy.gif",
            "https://media0.giphy.com/media/YRVP7mapl24G6RNkwJ/200.gif",
            "https://media4.giphy.com/media/efZeeUTH7aRdxZVjJW/giphy-downsized-medium.gif",
            "https://media0.giphy.com/media/13McATXm3umOL6/giphy.gif",
            "https://thumbs.gfycat.com/BruisedAnchoredCoyote-max-1mb.gif",
            "https://media3.giphy.com/media/bPWyTsy2huZji/200.gif",
            "https://media3.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif",
            "https://media1.giphy.com/media/t8L4eNho9MyOyMNTJc/giphy-downsized.gif",
            "https://i.pinimg.com/originals/79/09/c3/7909c3b27f9f02c830d89a1b817e4ad2.gif",
            "https://thumbs.gfycat.com/EminentLameAsiaticgreaterfreshwaterclam-max-1mb.gif",
            "http://i.imgur.com/jK0YwN7.gif",
            "http://dosi.univ-amu.fr/sites/dosi.univ-amu.fr/files/giphy-lol-cat.gif",
            "https://media0.giphy.com/media/YJ85eVpdZDy7e/giphy.gif",
            "https://i2.wp.com/dianaurban.com/wp-content/uploads/2017/07/01-cat-stretching-feet.gif"
        ]
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Voici une image de chat ! ^^`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'cat',
    help : {
        description : 'Cette commande permet de d\'avoir une image de chat ^^.'
    }
}