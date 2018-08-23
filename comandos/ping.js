exports.run = (client, msg, args) => {

  msg.delete();

  msg.channel.send("Ping 7u7").then(m => m.edit(`el ping es ${m.createdTimestamp - msg.createdTimestamp}ms. API ms es ${Math.round(client.ping)} `) );

};



exports.help = {

  name: 'ping'

};
