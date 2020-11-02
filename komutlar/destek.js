const Discord = require('discord.js');

let botid = ('592884164890460171') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Destek Ekibi !`)
   .addField(`» Yönetici`, `[ PolatXD ](https://www.instagram.com/polatunser/?hl=tr/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
   .addField(`» Yönetici`, `[ berrke ](https://www.instagram.com/beerkesari/?hl=tr/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
   .addField(`» Admin`, `[ Enes ](https://www.instagram.com/e.corular7/?hl=tr/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'destek',
  description: '',
  usage: ''
};
