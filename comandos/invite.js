const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Bot creado por MegaStar (MegaStar#0782)")
  .addField("Link de invitacion","Para que me agregues a tu servidor dale click [a este mensaje :D](https://discordapp.com/oauth2/authorize?client_id=482143490558656513&scope=bot&permissions=8192)")
  .setColor("0000FF")
  .setThumbnail(bicon)
  await message.author.send(botembed)
  await message.channel.send("Acabo de enviarte el link de invitacion en un mensaje privado :D")
}


module.exports.help = {
  name:"invitar"
}
