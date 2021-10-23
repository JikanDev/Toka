const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const gifs = [
            "https://media.tenor.com/images/d7afbeb5c3b3efc48a86eb2c3450ceb8/tenor.gif",
            "https://i.gifer.com/72dG.gif",
            "https://media4.giphy.com/media/Fu3OjBQiCs3s0ZuLY3/giphy.gif?cid=82a1493bqlxvkrjjosl31ptj23fgkp4f0cix8uog18g41uyt&rid=giphy.gif",
            "https://thumbs.gfycat.com/AgileTestyCowrie-size_restricted.gif",
            "https://media4.giphy.com/media/cjbxJXhNXDMjhlr1S8/giphy.gif",
            "https://upload.wikimedia.org/wikipedia/en/4/45/DJ_Dog.gif",
            "https://media.tenor.com/images/6c2cda3d364bb30bada456deae08e792/tenor.gif",
            "https://thumbs.gfycat.com/SkeletalComposedIberiannase-max-1mb.gif",
            "https://i2.wp.com/images.onwardstate.com/uploads/2015/05/oie_14175751vZSQRLEn.gif",
            "https://i0.wp.com/onwardstate.com/wp-content/uploads/2015/05/cute.gif",
            "https://media2.giphy.com/media/iJgXKwwzaXDgWtHnyw/giphy.gif",
            "https://media1.giphy.com/media/lowAFsBujmjQ0MQ55i/giphy.gif",
            "https://i.pinimg.com/originals/0f/e7/ba/0fe7ba095b4f3c1779a3c8f35ad857d3.gif",
            "https://media3.giphy.com/media/l2uluGTvB7DAQvZyHp/giphy.gif",
            "http://images5.fanpop.com/image/photos/26300000/Dog-Gif-animals-26334576-480-360.gif",
            "https://thumbs.gfycat.com/BogusBlindGuineapig-size_restricted.gif",
            "https://media4.giphy.com/media/QxqqwXQuSWufNazWWU/giphy-downsized-large.gif",
            "https://i.pinimg.com/originals/ac/e1/44/ace144e8e634f49f1573eb0574811af2.gif",
            "http://www.doggifpage.com/gifs/154.gif",
            "https://media.tenor.com/images/6d6ca4f9717440e13665685b7c03f9ea/tenor.gif",
            "https://media0.giphy.com/media/eYilisUwipOEM/200.gif",
            "https://upload.wikimedia.org/wikipedia/commons/4/40/How_dogs_drink.gif",
            "https://i.imgur.com/mJRa4GD.gif",
            "https://media3.giphy.com/media/eLpO6JFWmTximd6608/giphy-downsized-large.gif",
            "https://media.giphy.com/media/26n6DnBXkIpxF5IfC/giphy.gif",
            "http://78.media.tumblr.com/bc65ae42d5b94fa9e23dedb88cf983ac/tumblr_ox6xcgKH3L1wv9o03o1_250.gif",
            "https://i.pinimg.com/originals/67/01/8e/67018ee675b93ed47372ee72ca57eea1.gif",
            "https://www.rover.com/blog/wp-content/uploads/2014/06/dramatic-pug.gif",
            "https://media1.giphy.com/media/TjGm3jg5sgV1mBmq8d/giphy.gif?cid=2fb0ca76a143b0171cfa873fa3eba58e34095edfd1018a9d&rid=giphy.gif",
            "https://media1.giphy.com/media/GdkCsT3SzN33i/giphy.gif",
            "https://media1.giphy.com/media/Q60iJpkD9URe2DpQgd/200.gif",
            "https://media0.giphy.com/media/dudcZA9e14HIY/giphy.gif",
            "https://acegif.com/wp-content/uploads/funny-dog-85.gif",
            "https://prd-neon-website-statics.s3.eu-west-1.amazonaws.com/content/uploads/2017/03/chio3.gif",
            "https://giffiles.alphacoders.com/877/8773.gif",
            "https://www.lolgifs.net/wp-content/uploads/2019/01/happy-dog-gif.gif",
            "https://media.tenor.com/images/f9f2c873d11bae90643340b76370b84e/tenor.gif",
            "https://i.imgur.com/NoRnGUX.gif?noredirect",
            "http://38.media.tumblr.com/c26fcf0cfcd314dec74227a90dbe5d72/tumblr_mss4l6rU5q1r0b0qco1_500.gif",
            "https://thumbs.gfycat.com/ImpeccableSpanishHarvestmouse-size_restricted.gif",
            "https://i1.wp.com/puppytoob.com/wp-content/uploads/2013/06/anigif_enhanced-buzz-25730-1355518361-8.gif"
        ]
        const answer = gifs[Math.floor(Math.random() * gifs.length)]
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Voici une image de chien ! ^^`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'dog',
    help : {
        description : 'Cette commande permet de d\'avoir une image de chien ^^.'
    }
}