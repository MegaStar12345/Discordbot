const snekfetch = require('snekfetch');



exports.run = (client, msg, args) => {

  if(!args[0]) return msg.channel.send("Necesitas especificar el logro de minecraft que quieres buscar.")
  let [title, contents] = args.join(' ').split(' | ');

  if (!contents) {

    [title, contents] = ['Logro obtenido!', title];

  }





  let rnd = Math.floor((Math.random() * 39) + 1);

  if (args.join(' ').toLowerCase().includes('burn')) rnd = 38;

  if (args.join(' ').toLowerCase().includes('cookie')) rnd = 21;

  if (args.join(' ').toLowerCase().includes('cake')) rnd = 10;



  if (title.length > 22 || contents.length > 22) return msg.channel.send('Longitud maxima: 22 caracteres.').then(setTimeout(msg.delete.bind(msg), 1000));

  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;

  snekfetch.get(url)

    .then(r => msg.channel.send('', {

      files: [{

        attachment: r.body,

      }],

    }));

  //msg.delete();

};



module.exports.help = {
  name: "logro",
  aliases: [],
  descripcion: "Este comando te permite modificar una imagen de un logro de minecraft poniendole el texto que usted quiera.",
  permisonivel: 1

}
