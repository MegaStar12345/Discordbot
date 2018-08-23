const Discord = require("discord.js");


module.exports.run = async (bot,message,args) => {
  var avatar = message.mentions.users.first() || message.author;

  var embed = new Discord.RichEmbed()
  .setTitle("Avatar del usuario "+avatar.username)
  .setImage(avatar.displayAvatarURL)
  .setColor("#bc0000")
  .setFooter(`Comando usado por ${avatar.username}`,avatar.displayAvatarURL)

  message.channel.send(embed);

}

module.exports.help = {
name:"avatar"
}
