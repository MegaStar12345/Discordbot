const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {
  //!coins
  const url = "http://services.buildandshoot.com/serverlist.json"

  if(!args[0]) return message.channel.send("Necesitas especificar el nombre del servidor.\n``Ten en cuenta que buscare y te mostrare la primera coincidencia que encuentre.``\n``Si usted quieres buscar un servidor especifico, debera colocar **{ }** tanto al principio con al final del nombre, EXP: {aloha.pk arena}``")
  let ms = args.join(" ");
  snekfetch.get(url)

    .then(re => {
          let invalid = "No se pudo encontrar el servidor :("
          let resp = JSON.parse(re.text);
          let count = 0;

          while (count < resp.length) {
            if (ms[0] == "{" && ms[ms.length-1] == "}") {
              let servidor = ms.slice(1,-1).toLowerCase();
              if (servidor == resp[count].name.toLowerCase()) {
                name_server = resp[count].name;
                game_mode = resp[count].game_mode;
                ip = resp[count].identifier;
                map = resp[count].map;
                players = resp[count].players_current+"/"+resp[count].players_max;
                ping = resp[count].latency;
                pais = resp[count].country;
                version = resp[count].game_version;
                let paisimg = "https://openclipart.org/image/2400px/svg_to_png/211479/Simple-Image-Not-Found-Icon.png"
                let convermensaje = map.replace(/[" /`'"]/ig,"");
                let me = convermensaje.toLowerCase();

                if (pais == "EC") pais = "Ecuador", paisimg = "http://flagpedia.net/data/flags/w580/ec.png"
                if (pais == "US") pais = "Estados Unidos", paisimg = "https://i.ytimg.com/vi/JWHiQ6eB1z4/maxresdefault.jpg"
                if (pais == "PE") pais = "Peru", paisimg = "http://flagpedia.net/data/flags/w580/pe.png"
                if (pais == "CO") pais = "Colombia", paisimg = "http://flagpedia.net/data/flags/w580/co.png"
                if (pais == "AR") pais = "Argentina", paisimg = "http://flags.fmcdn.net/data/flags/w580/ar.png"
                if (pais == "DE") pais = "Alemania", paisimg = "http://flags.fmcdn.net/data/flags/w580/de.png"
                if (pais == "BR") pais = "Brasil", paisimg = "http://flags.fmcdn.net/data/flags/w580/br.png"
                if (pais == "MX") pais = "Mexico", paisimg = "http://flags.fmcdn.net/data/flags/w580/mx.png"
                if (pais == "FR") pais = "Francia", paisimg = "http://flags.fmcdn.net/data/flags/w580/fr.png"
                if (pais == "VE") pais = "Venezuela", paisimg = "http://flags.fmcdn.net/data/flags/w580/ve.png"
                if (pais == "PL") pais = "Polonia", paisimg = "http://flags.fmcdn.net/data/flags/w580/pl.png"
                if (pais == "AU") pais = "Austrailia", paisimg = "http://flags.fmcdn.net/data/flags/w580/au.png"
                if (pais == "UA") pais = "Ucrania", paisimg = "http://flagpedia.net/data/flags/w580/ua.png"
                if (pais == "RU") pais = "Rusia", paisimg = "http://flagpedia.net/data/flags/w580/ru.png"
                if (pais == "JP") pais = "Japon", paisimg = "http://flagpedia.net/data/flags/w580/jp.png"
                if (pais == "RO") pais = "Rumania", paisimg = "http://flagpedia.net/data/flags/w580/ro.png"
                if (pais == "GB") pais = "Reino Unido", paisimg = "http://flagpedia.net/data/flags/w580/gb.png"

                let ballembed = new Discord.RichEmbed()
                .setTitle("informacion del server "+name_server)
                .setThumbnail(paisimg)
                .addField("**Modo de juego**", game_mode,true)
                .setColor('RANDOM')
                .addField("**Ip**", ip,true)
                .addField("**Mapa**", map,true)
                .addField("**Jugadores**", players,true)
                .addField("**Ping**", ping,true)
                .addField("**Pais(host)**", pais,true)
                .addField("**Version**", version,true)
                message.channel.send(ballembed);
                return

              }
            }
            if (resp[count].name.includes(ms)) {
              name_server = resp[count].name;
              game_mode = resp[count].game_mode;
              ip = resp[count].identifier;
              map = resp[count].map;
              players = resp[count].players_current+"/"+resp[count].players_max;
              ping = resp[count].latency;
              pais = resp[count].country;
              version = resp[count].game_version;
              let paisimg = "https://openclipart.org/image/2400px/svg_to_png/211479/Simple-Image-Not-Found-Icon.png"
              let convermensaje = map.replace(/[" /`'"]/ig,"");
              let me = convermensaje.toLowerCase();


              if (pais == "EC") pais = "Ecuador", paisimg = "http://flagpedia.net/data/flags/w580/ec.png"
              if (pais == "US") pais = "Estados Unidos", paisimg = "https://i.ytimg.com/vi/JWHiQ6eB1z4/maxresdefault.jpg"
              if (pais == "PE") pais = "Peru", paisimg = "http://flagpedia.net/data/flags/w580/pe.png"
              if (pais == "CO") pais = "Colombia", paisimg = "http://flagpedia.net/data/flags/w580/co.png"
              if (pais == "AR") pais = "Argentina", paisimg = "http://flags.fmcdn.net/data/flags/w580/ar.png"
              if (pais == "DE") pais = "Alemania", paisimg = "http://flags.fmcdn.net/data/flags/w580/de.png"
              if (pais == "BR") pais = "Brasil", paisimg = "http://flags.fmcdn.net/data/flags/w580/br.png"
              if (pais == "MX") pais = "Mexico", paisimg = "http://flags.fmcdn.net/data/flags/w580/mx.png"
              if (pais == "FR") pais = "Francia", paisimg = "http://flags.fmcdn.net/data/flags/w580/fr.png"
              if (pais == "VE") pais = "Venezuela", paisimg = "http://flags.fmcdn.net/data/flags/w580/ve.png"
              if (pais == "PL") pais = "Polonia", paisimg = "http://flags.fmcdn.net/data/flags/w580/pl.png"
              if (pais == "AU") pais = "Austrailia", paisimg = "http://flags.fmcdn.net/data/flags/w580/au.png"
              if (pais == "UA") pais = "Ucrania", paisimg = "http://flagpedia.net/data/flags/w580/ua.png"
              if (pais == "RU") pais = "Rusia", paisimg = "http://flagpedia.net/data/flags/w580/ru.png"
              if (pais == "JP") pais = "Japon", paisimg = "http://flagpedia.net/data/flags/w580/jp.png"
              if (pais == "RO") pais = "Rumania", paisimg = "http://flagpedia.net/data/flags/w580/ro.png"
              if (pais == "GB") pais = "Reino Unido", paisimg = "http://flagpedia.net/data/flags/w580/gb.png"

              let ballembed = new Discord.RichEmbed()
              .setTitle("informacion del server "+name_server)
              .setThumbnail(paisimg)
              .addField("**Modo de juego**", game_mode,true)
              .setColor('RANDOM')
              .addField("**Ip**", ip,true)
              .addField("**Mapa**", map,true)
              .addField("**Jugadores**", players,true)
              .addField("**Ping**", ping,true)
              .addField("**Pais(host)**", pais,true)
              .addField("**Version**", version,true)
              message.channel.send(ballembed);
              return
            };
            count++;
          };
          message.channel.send("No se pudo encontrar el servidor :(")



  }).catch(error => {
         return message.channel.send("Ocurrio un error, tal vez el serverlist de buildandshoot este off.")
  });

}

module.exports.help = {
  name: "server"

}
