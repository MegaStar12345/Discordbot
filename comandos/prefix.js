const Discord = require("discord.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://mega:rangers12@ds149252.mlab.com:49252/rangers",{
  useNewUrlParser: true
});

const Prefix = require("../models/prefix.js")


module.exports.run = async (bot,message,args) => {

  if(!args[0]) {
    var embed = new Discord.RichEmbed()
    .addField("Comando no ejecutado","Necesitas ingresar el un prefix.")
    .setColor("RANDOM")
    return message.channel.send(embed)
  }
  Prefix.findOne({serverID: message.guild.id}).then((currentprefix) => {
    if(currentprefix) {
      currentprefix.serverPrefix = args[0]
      currentprefix.save().catch(err => console.log(err))
      var dsaasd = new Discord.RichEmbed()
      .addField("Comando ejecutado","Prefix actual: **"+args[0]+"**")
      .setColor("RANDOM")
      return message.channel.send(dsaasd)
    }
    else{
      const Prepre = new Prefix({
        serverID: message.guild.id,
        serverPrefix: args[0]
      })
      Prepre.save().catch(err => console.log(err))
      var huuyu = new Discord.RichEmbed()
      .addField("Comando ejecutado","Prefix actual: **"+args[0]+"**")
      .setColor("RANDOM")
      return message.channel.send(huuyu)
    }
  })

}

module.exports.help = {
  name: "setprefix"
}
