const Discord = require("discord.js");

const superagent = require("superagent");



//.cat

module.exports.run = async (bot, message, args) => {

  let link = await getLink();



  for (let i = 0; i < 10; i++) {

    if (i) {

      //Checks if the url is an image

      if (

        link[link.length - 3] == "j" ||

        link[link.length - 3] == "J" ||

        link[link.length - 3] == "p"

      ) {

        let embed = new Discord.RichEmbed()

          .setColor("#f4b342")

          .setTitle("IMAGEN DEL GATO")

          .setDescription(

            "Si tienes alguna sugerencia no olvides usar el comando **megabot**"

          )

          .setImage(link);



        return message.channel.send(embed); //Sends image

      }

      //Checks for any GIFS

      else if (link[link.length - 3] == "g" || link[link.length - 3] == "G") {

        let embed = new Discord.RichEmbed()

          .setColor("#f4b342")

          .setTitle("GIF DE UN GATO")

          .setDescription(

            "Si tienes alguna sugerencia no olvides usar el comando **megabot**"

          )

          .setImage(link);



        return message.channel.send(embed); //Sends GIF

      } else {

        link = await getLink();

      }

    }

  }

  return message.channel.send(

    "Ocurrio un error, intenta usar el comando despues.\n\n **Si el problema sigue persistiendo, por favor reportalo.**"

  ); //Catches any unknown error



  async function getLink() {

    //Access API for random cat image/gif

    let { body } = await superagent

      .get(`http://aws.random.cat/meow`)

      .on("error", err => {

        //console.log(err);

        return message.channel.send(

          "Ocurrio un error.\n\n **Si el problema sigue persistiendo, por favor reportalo.**"

        );

      });

    let link = body.file; //url of cat

    return link;

  }

};



module.exports.help = {

  name: "gatomg"

};
