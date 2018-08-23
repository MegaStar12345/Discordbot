const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {



  ROLEZZ = message.guild.roles.array()



  var ROLES = "";



    ROLEZZ.forEach(function(element){

        ROLES += element.name + "\n"

    });


    if(!message.member.hasPermission("ADMINISTRATOR")){

      return message.reply(":x: " + "| Tu necesitas ser \"ADMIN\" para usar este comando").catch(console.error);

    }
    message.channel.send("```" + "\n" +

                         "---------------------------------" + "\n" +

                         "TODOS LOS ROLES DEL SERVIDOR" + "\n" +

                         "---------------------------------" + "\n" +

                         `${ROLES}` + "```");



}



module.exports.help = {

    name: "roles"

}
