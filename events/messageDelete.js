const Discord = require('discord.js');
const time = require('../functions/time');

module.exports = (client, message) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    var logChannelId = client.guildDB.get(message.guild.id, "logChannel");
    if(logChannelId) {
        logServer = message.guild.channels.get(logChannelId);
        if(message.author.id === client.user.id && message.channel.id === logChannelId)
            return;
        if (logServer) {
            var attach = "";
            if(message.attachments[0]) {
                attach += "**Attachments**\n";
                message.attachments.forEach(function(at) {
                    attach += at.url + '\n';
                });
            }
            var msg = "**Empty or Embed**";
            if (message.content !== '') {
                msg = message.content.substring(0, 1000);
            }
            //console.log(message)
            var embed = new Discord.MessageEmbed()
                .setAuthor(`Message deleted in #${message.channel.name}`)
                .setColor(client.config.embedcolor)
                //.addField("Message By:", `${message.author.tag} (${message.author.id})`)
                .setDescription(`${message.author.tag} (${message.author.id})`)
                .addField(`Message: (${message.id})`, msg)
                .setFooter(time.stamp());

            if (attach !== "") {
                embed.addField("Attachments:", attach);
            }
            logServer.send({embed});
        }
    }
}