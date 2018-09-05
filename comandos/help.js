const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Bot creado por MegaStar (MegaStar#0782)")
  .addField("Este bot unicamente esta relacionado al juego **Ace of Spades**","**__Comandos__**\n\n**-server** => Para mostrar todas las estadisticas de un servidor.\n**-serverlist** => Para mostrar el serverlist.\n**-invitar** => Para que me invites a tu servidor.\n**-avatar** => Comando extra, te muestra tu avatar o el de alguien.")
  .setColor("0000FF")
  .setThumbnail(bicon)
  await message.author.send(botembed)
  await message.channel.send("Acabo de enviarte el link de invitacion en un mensaje privado :D")
}


module.exports.help = {
  name:"help"
}
