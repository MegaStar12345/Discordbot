const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let prefix = "-"
  if(!args[0]) return message.channel.send("Necesitas especificar que quieres ver:\n`"+prefix+"aos scripts\n"+prefix+"aos megaos\n"+prefix+"aos servers\n"+prefix+"aos maps`")
  if(args[0] == "scripts"){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Aos Scripts\n\n***https://github.com/matpow2/pyspades-userscripts***")
    .setColor("#0000FF")
    .setThumbnail(bicon)
    message.channel.send(botembed);
    return;
  }
  if(args[0] == "megaos"){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Os modificado por MegaStar\n\n***http://www.mediafire.com/file/jhebuyowda4jt8j/os.zip/file***")
    .setColor("#0000FF")
    .setThumbnail(bicon)
    message.channel.send(botembed);
    return;
  }
  if(args[0] == "servers"){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Aos Serverlist\n\n***https://www.buildandshoot.com/servers/***")
    .setColor("#0000FF")
    .setThumbnail(bicon)
    message.channel.send(botembed);
    return;
  }
  if(args[0] == "maps"){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Aos Maps\n\n***http://aloha.pk/files/aos/maps/***\n***http://aos.acornserver.com/maps/***")
    .setColor("#0000FF")
    .setThumbnail(bicon)
    message.channel.send(botembed);
    return;
  }

}

module.exports.help = {

  name: "aos"

}
