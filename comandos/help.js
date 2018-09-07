const Discord = require("discord.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://mega:rangers12@ds149252.mlab.com:49252/rangers",{
  useNewUrlParser: true
});

const Prefix = require("../models/prefix.js")



module.exports.run = async (bot, message, args) => {
  Prefix.findOne({serverID: message.guild.id}).then((currentprefix) => {
    if(currentprefix) {
      let prefix = currentprefix.serverPrefix
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setTitle("Bot creado por MegaStar (MegaStar#0782)")
      .addField("Este bot unicamente esta relacionado al juego **Ace of Spades**","**__Comandos__**\n\n**"+prefix+"server** => Para mostrar todas las estadisticas de un servidor.\n**"+prefix+"serverlist** => Para mostrar el serverlist.\n**"+prefix+"invitar** => Para que me invites a tu servidor.\n**"+prefix+"avatar** => Comando extra, te muestra tu avatar o el de alguien.\n**"+prefix+"setprefix** => Comando extra, para cambiar el prefix del bot.")
      .setColor("0000FF")
      .setThumbnail(bicon)

      return message.channel.send(botembed)
    }else{
      let prefix = "-"
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setTitle("Bot creado por MegaStar (MegaStar#0782)")
      .addField("Este bot unicamente esta relacionado al juego **Ace of Spades**","**__Comandos__**\n\n**-server** => Para mostrar todas las estadisticas de un servidor.\n**-serverlist** => Para mostrar el serverlist.\n**-invitar** => Para que me invites a tu servidor.\n**-avatar** => Comando extra, te muestra tu avatar o el de alguien.\n**-setprefix** => Comando extra, para cambiar el prefix del bot.")
      .setColor("0000FF")
      .setThumbnail(bicon)

      return message.channel.send(botembed)
    }
  });

}


module.exports.help = {
  name:"commands"
}
