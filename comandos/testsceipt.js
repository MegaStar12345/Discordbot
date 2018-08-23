const Discord = require("discord.js");
const request = require("request");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

  let url = "http://services.buildandshoot.com/serverlist.json"
  let ms = args.join(" ");

  let nueve = ":nine:"
  const emoji = bot.emojis.find("name", "kee");
  let player = 0;
  let mieleccion = 0;
  let sicon = "https://i.imgur.com/8eXYyJH.png";
  let sc = "https://i.imgur.com/ut0YcH5.png";
  const ayy = bot.emojis.find("name", "o_O");
  const mesg = await message.channel.send(`recolectando datos ${ayy}.`)
  //const kee =
  await mesg.react("⬅")
  await mesg.react(emoji.id)
  await mesg.react("➡")


  let invalid = "La lista de servidores esta off!"
  request(url, (err,res,body) => {
  if(!err){

          let resp = JSON.parse(body);

          function deMayorAMenor(elem1, elem2) {
            return elem2.players_current - elem1.players_current;
          }

          resp.sort(deMayorAMenor)

          let count = 0;
          let mylist = [];
          while (count < resp.length) {
            name_server = "**Servidor:** `"+resp[count].name+"` **Modo:** `"+resp[count].game_mode+"` **Jugadores:** `"+resp[count].players_current+"/"+resp[count].players_max+"`";
            mylist.push(name_server)
            player = player + resp[count].players_current;
            count++;
          };

          let arrays = [], size = 10;
          while (mylist.length > 0) {
              arrays.push(mylist.splice(0, size));
              mesg.edit("Recolectando servidores.. paginas actuales: **"+arrays.length+"**.")


         }
         const embed = new Discord.RichEmbed()
         .setDescription("© MegaStar\nServerlist completo, paginas actuales: **"+arrays.length+"**\nDale click a las reacciones ⬅ ➡ para avanzar o retroceder.\nSi quieres ver los datos de un servidor especifico, escribe `<server`")
         .setThumbnail(sicon)
         .setColor("#327224")
         .addField("Numero total de jugadores", player)
         .addField("Numero total de servidores", resp.length)
         .setFooter(`Fecha de verificacion: ${moment(message.createdAt).format('\\[DD/MM/YY] \\[HH:mm:ss]')}`, sc);

         mesg.edit(embed)
         mesg.edit(arrays[0])

         const filter = (reaction, user) => (reaction.emoji.name === "⬅" || reaction.emoji.name === "➡" || reaction.emoji.name === emoji.name) && user.id === message.author.id;
         const collector = mesg.createReactionCollector(filter, { time: 180e3 });
         collector.on('collect', async reaction => {

           if (reaction.emoji.name === "⬅") {
               if(mieleccion <= 0) {
                 reaction.remove(message.author.id)
               }
               else{
                 mieleccion -= 1
                 await mesg.edit(arrays[mieleccion])
                 reaction.remove(message.author.id)
               }

           }
           else if (reaction.emoji.name === "➡") {
               if( mieleccion >= arrays.length - 1) {
                 reaction.remove(message.author.id)
               }
               else{
                 mieleccion += 1
                 await mesg.edit(arrays[mieleccion])
                 reaction.remove(message.author.id)
               }

           }
           else if (reaction.emoji.name === emoji.name) {
             collector.stop('user');
             mesg.edit("Gracias por usar este comando.");

           }
           });

  }else{

          message.channel.send(invalid)
          mesg.delete()

  }
  });

}

module.exports.help = {
  name: "serverlist"
}
