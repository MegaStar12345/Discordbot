const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")){

    return message.reply(":x: " + "| Tu necesitas ser \"ADMIN\" para usar este comando").catch(console.error);
    }
  if(!args[0]) return message.channel.send("Necesitas especificar el **#canal** y el **mensaje** que quieres enviar.")
  if(!args[1]) return message.channel.send("Necesitas poner el mensaje que quieres enviar.")
  let channel = args[0];
  let bicon = bot.user.displayAvatarURL;
  let kickChannel = message.guild.channels.find(`name`, channel);
  if(!kickChannel) return message.channel.send("No se pudo encontrar el canal.");
  let kReason = args.slice(1).join(" ");
  kickChannel.send(kReason);

}

module.exports.help = {
  name: "say"
}
