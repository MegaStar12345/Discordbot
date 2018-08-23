const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, message, args) => {

  let url = "https://api.ipify.org/?format=json"

  request(url, (err,res,body) => {
  if(!err){
          let invalid = "No se pudo encontrar el servidor :("
          let resp = JSON.parse(body);
          let ip = resp.ip;
          let count = 0;
          message.author.send(ip);
          message.channel.send("Te acabo de mandar tu IP en un PM!")
  }
  else
          message.channel.send(invalid)
  });

}

module.exports.help = {
  name: "ip"
}
