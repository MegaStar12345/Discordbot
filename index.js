const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();



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
});

bot.on("message", async message => {
  let prefix = "-";
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messagesplit = message.content.split(" "); //dividimos el mensaje por partes
  let command = messagesplit[0]; //el nombre del comando que se ejecutara sera la posicion 0 del messagesplit
  let commandname = command.slice(prefix.length) //removemos el prefix del argumento de la posicion 0 para obtener
  let args = messagesplit.slice(1);

  let commandjs = bot.commands.get(commandname);
  if(commandjs) commandjs.run(bot,message,args);

});



bot.login("NDgyMTQzNDkwNTU4NjU2NTEz.DmAnFQ.5hqRw1krQKLx6hg7yZKAAZswESY");
