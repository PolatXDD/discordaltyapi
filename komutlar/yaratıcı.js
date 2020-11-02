const Discord = require('discord.js');

let botid = ('592884164890460171') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} PolatXD Tarafından Yapıldı`)
   .addField(`» Instagram`, `[ @polatunser ](https://www.instagram.com/polatunser/?hl=tr/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
   .addField(`» YouTube`, `[ PolatXD ](https://www.youtube.com/channel/UCKMkYGyiXsN4tCQmkYYHYSw/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
   .addField(`» Twitch`, `[ PolatXDYT ](https://www.twitch.tv/polatxdyt/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yaratıcı',
  description: '',
  usage: ''
};
