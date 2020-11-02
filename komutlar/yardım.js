const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`PolatXD`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=592884164890460171&scope=bot&permissions=2146958847) | [Discord'uma Katılmayı Unuma](https://discord.gg/QkFYB3k) | [YouTube](https://www.youtube.com/channel/UCKMkYGyiXsN4tCQmkYYHYSw)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`PolatXD - Yardım`, `:white_small_square: | **+eğlence**: Sunucunuz için Eğlence Komutlarını Gösterir!\n:white_small_square: | **+botkomutları**: Sunucudaki Coğu Komutları Gösterir!\n:white_small_square: | **+destek**: Destek Ekibimizi Gösterir!\n:white_small_square: | **+çekiliş**: Aktif Çekilişleri Gösterir!\n:white_small_square: | **+yaratıcı**: Botun Yaratıcısı Kimdir ? Sosyal Medyalar!`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
