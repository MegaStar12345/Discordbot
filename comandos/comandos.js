const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {
    let prefix = "-"



    let page1 = "__**Comandos**__ `prefix: "+prefix+"`\n\n"+
                "addrol, aos, rol, avatar, megabot, delines, comandos, createmoji, crearinvitacion, ping, removerol, roles, say, serverlist"


    let embed = new Discord.RichEmbed()
    .addField("Comandos",page1)
    message.channel.send(embed)
}


module.exports.help = {

    name: "comandos"

}
