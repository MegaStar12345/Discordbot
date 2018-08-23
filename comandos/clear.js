const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("Antes de eliminar los mensajes, debes de darme el permiso de MANAGE_MESSAGES.")
  }
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Para usar este comando, necesitas el permiso de MANAGE_MESSAGES")
  if(!args[0]) return message.channel.send("Necesitas especificar la cantidad de mensajes, asegurate de no usar un numero mayor a 50");
  try{
    var sc = parseInt(args[0])
    if(sc <= 0 || sc > 50){
      return message.channel.send("La cantidad no es valida, asegurate de poner un numero mayor a 0 y a la vez que sea menor a 50, no voy a ejecutar lo que pusiste ya que podria ocurrir un error en tu servidor.")
    }
    message.channel.bulkDelete(sc).then(() => {
      message.channel.send(`Se elimino ${args[0]} mensajes.`).then(msg => msg.delete(5000));
        });
  }
  catch(error){
    return message.channel.send("Ocurrio un error, al tratar de ejecutar este comando.")
  }
}

module.exports.help = {
  name: "delines"
}
