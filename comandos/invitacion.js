
const Discord = require('discord.js');


exports.run = (bot, msg, args) => {
    let prefix = "-"
    const server = bot.guilds.get(msg.guild.id);

    const embed = new Discord.RichEmbed()

        .setTitle('ACCESO DENEGADO')

        .setAuthor(msg.author.tag)

        .setColor('#FF0000')

        .setDescription('Tu no tienes el permiso necesario para usar este comando, se requiere tener el permiso **CREATE_INSTANT_INVITE**')

        //.setFooter(`Striker's Bots 2017© | Sent in ${server.name} `)

        .setThumbnail(bot.user.displayAvatarURL)

        .setTimestamp();



    const invhelp = new Discord.RichEmbed()

        .setTitle('Creacion de una invitacion instantanea')

        .setColor('#32CD32')

        .addField('Acerca de', 'Crea una invitacion instantanea del servidor.', false)

        .addField('Modo de uso', prefix+'crearinvitacion <id del servidor>\n'+prefix+'crearinvitacion <id del servidor> **permanente**\nCuando usas la palabra **permanente** al final, te permite crear una invitacion permanente.', false)

        .addField('Permiso requerido', 'CREATE_INSTANT_INVITE')



        .setThumbnail(bot.user.displayAvatarURL)

        //.setTimestamp();



    const serveri= args[0]
    const time = args[1]
    const guild = bot.guilds.get(serveri);



    if (!serveri) {

        return msg.channel.send({

            embed: invhelp,

        });

    }

    const channel = guild.channels.filter(c => c.permissionsFor(guild.me).has('SEND_MESSAGES') && c.type === 'text').first();

    const createinv = 'CREATE_INSTANT_INVITE';



    if (msg.member.hasPermission(createinv)) {

        if (time == 'permanente') {

            channel.createInvite({

                    maxAge: 0,

                })

                .then((invite) => {

                    msg.channel.send(`Aqui esta la invitacion del servidor, ID: ${guild.id} | ${invite} | Esta invitacion es permanente`);

                });

        } else {

            channel.createInvite()

                .then((invite) => {

                    msg.channel.send(`Aqui esta la invitacion del servidor, ID: ${guild.id} | ${invite} | Esta invitacion expirara en 24 horas.`);

                });

        }

    } else {

        msg.channel.send({

            embed,

        });

    }

}

module.exports.help = {
  name:"crearinvitacion"
}
