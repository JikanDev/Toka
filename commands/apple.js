const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const apple = [
            "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/f/f/9/ff915bd5e6_50165784_pomme-hot84a1tg-global.jpg",
            "https://lovefoodhatewaste.ca/wp-content/uploads/2018/05/apples2.jpg",
            "https://media2.ledevoir.com/images_galerie/nwd_738563_577592/image.jpg",
            "https://www.hopla-ferme.fr/wp-content/uploads/2020/02/varietes-pommes.jpg",
            "http://www.collectif-urgence.com/wp-content/uploads/2018/04/pommes-2.jpeg",
            "https://lactualite.com/wp-content/uploads/2011/06/une-pomme-par-jour.jpg",
            "https://www.cuisine-de-bebe.com/wp-content/uploads/2017/05/1323969572pomme.jpg",
            "https://img.cuisineaz.com/680x357/2018-07-08/i140865-pomme.jpeg",
            "https://www.consoglobe.com/wp-content/uploads/2008/09/pommesfruit.jpg",
            "https://www.academiedugout.fr/images/17159/370-274/ffffff/fotolia_55372155_subscription_xxl-copy.jpg",
            "https://www.senioractu.com/photo/art/grande/9122512-14519887.jpg",
            "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/produit-pomme-jonagold.jpg",
            "https://www.domaine-darmandieu.com/wp-content/uploads/2018/07/Domaine-darmandieu-variete-pomme-Braeburn.png",
            "https://s3.amazonaws.com/rose.vero/wp-content/uploads/2020/09/01105305/guide-de-la-pomme.jpg"
        ]
        const answer = apple[Math.floor(Math.random() * apple.length)]
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Voici une image de pomme !`)
        .setImage(answer)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: 'apple',
    help : {
        description : 'Cette commande permet de d\'avoir une image de pomme ^^.'
    }
}