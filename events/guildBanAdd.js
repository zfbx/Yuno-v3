const Discord = require('discord.js');
const time = require('../functions/time');

module.exports = (client, guild, user) => {

    client.guildDB.ensure(guild.id, client.guildDBDefaults);
    var logChannelId = client.guildDB.get(guild.id, "logChannel");
    if(logChannelId) {
        logServer = guild.channels.get(logChannelId);
        if (logServer) {
            const embed = new Discord.MessageEmbed()
                .setAuthor("User Banned")
                .setColor(client.config.embedcolor)
                .setImage(user.avatarURL({format: 'png', size: 2048}))
                .addField("Id", `${user.tag} (${user.id})`)
                .setFooter(time.stamp());
            logServer.send({embed});
        }
    }

    client.log.info(`${user.tag} was just banned from ${guild.name}`);
}