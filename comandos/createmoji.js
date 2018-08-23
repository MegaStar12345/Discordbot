const Discord = require('discord.js');


exports.run = async (bot, message, args) => {
  let prefix = "-"

  if(!message.guild.me.hasPermission("MANAGE_EMOJIS")){
    return message.channel.send("Antes de usar este comando, debes de darme el permiso de MANAGE_EMOJIS.")
  }

  if (!message.guild.available) return message.channel.send(`El servidor "${message.guild.name}" (${message.guild.id}) no está disponible.`);

         if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("Usted necesita tener el permiso MANAGE_EMOJIS antes de usar este comando.");



         const image = args[0];

         const name = args[1];

         let isImgLink;



         if (!image) return message.channel.send("Necesitas especificar el URL de la imagen, "+prefix+"createmoji <URL> <nombre del emoji>");



         //if (image.match(/^https?:\/\/(\w+\.)?imgur.com\/(\w*\d\w*)+(\.[a-zA-Z]{3})?$/) || image.match(/^https?:\/\/(\w+\.)?vgy.me\/(\w*\d\w*)+(\.[a-zA-Z]{3})?$/)) {
         if(image) {
           isImgLink = true;

         } else {

           isImgLink = false;

         }



         if (isImgLink === false) return message.channel.send("Link invalido, asegurate de poner correctamente el URL");

         if (!name) return message.channel.send("Necesitas asignarle un nombre a un emoji.");



         message.guild.createEmoji(image, name)

           .then(emoji => message.channel.send(`Creando nuevo emoji: <:${emoji.name}:${emoji.id}>.`))

           .catch(error => {

             if (error.message === "404 Not Found") return message.reply("La imagen no se pudo encontrar.");

             console.log(error)

             return message.channel.send("Ocurrio un error, por favor contacta a mi creador @MegaStar#0782")

           });


}


module.exports.help = {
  name:"createmoji"
}
