const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  let prefix = "-"
  if(!message.guild.me.hasPermission("MANAGE_ROLES")){
    return message.channel.send("Antes de agregarle un rol a alguien, debes de darme el permiso MANAGE_ROLES.")
  }
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Usted necesita tener el permiso MANAGE_ROLES para usar este comando.")
  if(!args[0]){
    message.reply("Modo de uso: "+prefix+"addrol <usuario> <nombre del rol>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.reply("No pude encontrar al usuario :( asegurate de poner el nombre correctamente.")
  let weas = args.slice(1)
  let role = weas.join(" ")
  if (!role) return message.reply("Necesitas especificar el nombre de un rol.");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("No pude encontrar el rol :( asegurate de poner el nombre correctamente.");

  if (rMember.roles.has(gRole.id)) return message.reply("El usuario "+rMember.username+" actualmente ya tiene ese rol.");
  await (rMember.addRole(gRole.id));


  message.channel.send(`El usuario <@${rMember.id}>, ha obtenido el rol de ${gRole.name} satisfactoriamente.`)

}

module.exports.help = {
  name: "addrol"
}
