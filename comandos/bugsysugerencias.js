const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let prefix = "-"
  if(!args[0]) return message.channel.send("❎Necesitas especificar tu sugerencia u/o reporte: "+prefix+"megabot **mensaje**")
  let mensaj = args.join(" ")
  let chann = bot.channels.get("477967395726557195")
  chann.send(message.author.username+": "+mensaj)
  message.channel.send("Tu segerencia/reporte se envio correctamente.")
}


module.exports.help = {
  name:"megabot"
}
