const Discord = require('discord.js'),
    replies = ['Essaye plus tard', 'D\'après moi oui', 'C\'est non', 'Essaye encore', 'C\'est certain', 'Peu probable', 'Pas d\'avis', 'Oui absolument', 'Faut pas rêver', 'C\'est ton destin', 'Tu peux compter dessus', 'N\'y compte pas', 'Le sort en est jeté', 'Sans aucun doute', 'Impossible', 'Une chance sur deux', 'Très probable', 'Non', 'Repose ta question', 'Oui', 'C\est bien partis']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setDescription(replies[Math.floor(Math.random() * replies.length)])
            .setColor("RANDOM")
            .setFooter('Toka Community ↬ https://discord.gg/g8qJWnN3mW'))
    },
    name: '8ball',
    help : {
        description : 'Cette commande permet de faire un 8ball.',
        syntax : '<question>'
    }
}