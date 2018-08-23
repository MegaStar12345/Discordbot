const got = require('got');

const Discord = require('discord.js');

// Public API key provided by Giphy for anyone to use.

const API_KEY = 'dc6zaTOxFJmzC';



exports.run = async (bot, msg, args) => {

    if (args.length < 1) {

        return msg.channel.send("Necesitas especificar que es lo que quieres buscar.")

    }



    const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(args.join(' '))}`, { json: true });



    if (!res || !res.body || !res.body.data) {

        return msg.channel.send("No se encontro ningun resultado.")

    }



    msg.delete();
    let embed = new Discord.RichEmbed()
    .setColor("#f4b342")
    .setDescription("Si tienes alguna sugerencia no olvides usar el comando **megabot**")
    .setImage(res.body.data.image_url)
    msg.channel.send(embed)

};



// async function findRandom(query) {}



module.exports.help = {

    name: "gif"

}
