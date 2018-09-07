const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const mongoose = require("mongoose");

mongoose.connect("mongodb://mega:rangers12@ds149252.mlab.com:49252/rangers",{
  useNewUrlParser: true
});

const Prefix = require("./models/prefix.js")


fs.readdir("./comandos/", (error, comandos) => {
  if(error) console.log(error);
  let archivojs = comandos.filter(cmd => cmd.split(".").pop() === "js")
  if(archivojs.length <= 0){
    return console.log("No hay ningun comando disponible.")
  }
  archivojs.forEach((cmd, i) =>{
    let cmdjs = require(`./comandos/${cmd}`);
    console.log(`comando ${cmdjs} cargado correctamente.`);
    bot.commands.set(cmdjs.help.name, cmdjs);
  });
});

bot.on("ready", async () => {
  bot.user.setActivity(`Ace of Spades, -commands`, {type: "PLAYING"});
});


bot.on("message", async message => { //los mensajes
  if(message.author.bot) return; //evitamos crear un blucle infinitof
  if(message.channel.type === "dm") return; //evitamos que se use el comando por mensajes privados


  Prefix.findOne({serverID: message.guild.id}).then((currentprefix) => {
    if(currentprefix) {
      let prepre = currentprefix.serverPrefix
      if(message.content.startsWith(prepre)) { //si el mensaje comienza con el prefix se ejecuta lo de abajo
        let messagesplit = message.content.split(" "); //dividimos el mensaje
        let command = messagesplit[0]; //tomamos como comando el mensaje de la posicion inicial
        let commandname = command.slice(prepre.length); //removemos el prefix del mensaje command
        let args = messagesplit.slice(1); //las posiciones posteriores a la posicion inicial lo tomaremos como argumentos
        let commandjs = bot.commands.get(commandname); //evaluamos si el argumento inicial es un comando
        if(commandjs) commandjs.run(bot, message, args); //se es un comando lo ejecutamos
      }
    }
    else{
      let prepre = "-"
      if(message.content.startsWith(prepre)) { //si el mensaje comienza con el prefix se ejecuta lo de abajo
        let messagesplit = message.content.split(" "); //dividimos el mensaje
        let command = messagesplit[0]; //tomamos como comando el mensaje de la posicion inicial
        let commandname = command.slice(prepre.length); //removemos el prefix del mensaje command
        let args = messagesplit.slice(1); //las posiciones posteriores a la posicion inicial lo tomaremos como argumentos
        let commandjs = bot.commands.get(commandname); //evaluamos si el argumento inicial es un comando
        if(commandjs) commandjs.run(bot, message, args); //se es un comando lo ejecutamos
      }
    }
  })


});



bot.login(process.env.BOT_TOKEN);
