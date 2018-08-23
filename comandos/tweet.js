const Discord = require('discord.js');

const snekfetch = require("snekfetch");

exports.run = async (bot, message, args) => {

        const user = args[0];

        if (!user) return message.channel.send("Debes ingresar el nombre del usuario que quieres que se ponga en el tweet");

        const text = args.slice(1).join(" ")
        if(!text) return message.channel.send("Debes ingresar el texto que se escribira en el tweet.")
        //const text = await bot.awaitReply(message, "Debes ingresar el texto que se escribira en el tweet...\nEscribe `cancel` para cancelar este comando.", 10000);

        //if (text.toLowerCase() === "cancel") return message.channel.send("Cancelado.");



        const msg = await message.channel.send("Generando...");



        try {

          const { body } = await snekfetch.get(`https://nekobot.xyz/api/imagegen?type=${user.toLowerCase() === "realdonaldtrump" ? "trumptweet" : "tweet"}&username=${user.startsWith("@") ? user.slice(1) : user}&text=${encodeURIComponent(text)}`);

          await message.channel.send("", { file: body.message });

          msg.edit("Hecho!");

        } catch (error) {

          console.log(error)
          return message.channel.send("Ocurrio un error, por favor contacta a mi creador @MegaStar#0782")

        }


}



module.exports.help = {
  name:"tweet"
}
