const Discord  = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let usuario = message.member
  let emojis = ["aos","unturned","counterstrike","brawlhalla","osu","minecraft","roblox","fortnite","lol","l4d"]
  let roles = ["AoS","Unturned","Counter-Strike","Brawlhalla","Osu!","Minecraft","Roblox","Fortnite","LeagueOfLegend","Left4dead"]

  let words = []
  let embed = new Discord.RichEmbed()
  let msg;
  try{
    for(var x = 0; x < emojis.length; x++) {
      var emoji_react = bot.emojis.find("name", emojis[x])
      var role_name = message.guild.roles.find("name", roles[x])
      words.push(`${emoji_react} ${role_name.name}`)
    }
    embed.addField("Selecciona tu juego",words.join(" **|** "))

    msg = await message.channel.send(embed)

    for(var z = 0; z < emojis.length; z++) {
      var emoj = bot.emojis.find("name", emojis[z])
      await msg.react(emoj.id)
    }

  }catch(error){
    return message.channel.send("Ocurrio un error, contacta a mi creador MegaStar#0782")
  }

  const filter = (reaction, user) => {
    return emojis.includes(reaction.emoji.name) && user.id === message.author.id;
  }
  const collector = msg.createReactionCollector(filter, { time: 180e3 });
  collector.on('collect', async reaction => {
    for(var y = 0; y < emojis.length; y++) {
      if(reaction.emoji.name == emojis[y]){
        var detect_role = message.guild.roles.find(`name`, roles[y])
        if(usuario.roles.has(detect_role.id)) {
          collector.stop("user")
          usuario.removeRole(detect_role.id)
          message.channel.send("**"+message.author.username+"** acabas de quitarte el rol **"+detect_role.name+"**")
          return
        }
        else{
          collector.stop("user")
          usuario.addRole(detect_role.id)
          message.channel.send("**"+message.author.username+"** acabas de obtener el rol **"+detect_role.name+"**")
          return
        }
      }
    }

  })
}

module.exports.help = {
  name: "rol"
}
