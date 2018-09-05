const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {

  const url = "http://services.buildandshoot.com/serverlist.json"
  //let p = "aloha.pk territory control"
  let ms = args.join(" ");

  let nueve = ":nine:"
  let player = 0;
  let mieleccion = 0;
  let sicon = "https://i.imgur.com/8eXYyJH.png";
  let sc = "https://i.imgur.com/ut0YcH5.png";
  const mesg = await message.channel.send(`recolectando datos.`)
  //const kee =
  await mesg.react("⬅")
  await mesg.react("❌")
  await mesg.react("➡")


  let invalid = "Ocurrio un error al recaudar los datos o lista de servidores esta off!"
  snekfetch.get(url)

    .then(re => {
          let resp = JSON.parse(re.text)
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

          //console.log(mylist)
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
         .setFooter("Comando usado por "+message.author.username, message.author.displayAvatarURL);

         mesg.edit(embed)
         mesg.edit(arrays[0])

         const filter = (reaction, user) => (reaction.emoji.name === "⬅" || reaction.emoji.name === "➡" || reaction.emoji.name === "❌") && user.id === message.author.id;
         const collector = mesg.createReactionCollector(filter, { time: 180e3 });
         collector.on('collect', async reaction => {
           //await reaction.remove(bot.id)
           //await mesg.edit(arrays[0])
           if (reaction.emoji.name === "⬅") {
               if(mieleccion <= 0) {
                 //await mesg.edit("No puedes retroceder mas paginas ya que esta es la primera. :o_O: ")
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
                 //await mesg.edit("No puedes avanzar mas paginas ya que esta es la ultima. :cry_cat: ")
                 reaction.remove(message.author.id)
               }
               else{
                 mieleccion += 1
                 await mesg.edit(arrays[mieleccion])
                 reaction.remove(message.author.id)
               }

           }
           else if (reaction.emoji.name === "❌") {
             collector.stop('user');
             //mesg.edit('', { embed: null });
             mesg.edit("Gracias por usar este comando.").then(m => m.delete(5000));
             //mesg.delete(5000)

           }
           });

  }).catch(error => {
        console.log(error)
        message.channel.send(invalid)
        mesg.delete()
  })

}

module.exports.help = {
  name: "serverlist"

}
