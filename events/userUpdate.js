const Discord = require('discord.js');
const time = require('../functions/time');

module.exports = (client, oldUser, newUser) => {
    client.guildDB.ensure(newUser.guild.id, client.guildDBDefaults);
    var logChannelId = client.guildDB.get(newUser.guild.id, "logChannel");
    if(logChannelId) {
        logServer = newUser.guild.channels.get(logChannelId);
        if(logServer) {
            if (oldUser.user.tag !== newUser.user.tag) { // check for username change
                const embed = new Discord.MessageEmbed()
                    .setAuthor("User Changed Name")
                    .setColor(client.config.embedcolor)
                    .addField(newUser.user.tag, `(${newUser.id})`)
                    .addField("Old: ", oldUser.user.tag)
                    .addField("New: ", newUser.user.tag)
                    .setFooter(time.stamp());
                logServer.send({embed});

            }else {
                const embed = new Discord.MessageEmbed()
                    .setAuthor("Something changed for this user but I'm not sure what.")
                    .setColor(client.config.embedcolor)
                    .addField(newUser.user.tag, `(${newUser.id})`)
                    .setFooter(time.stamp());
                logServer.send({embed});
            }
        }
    }
}