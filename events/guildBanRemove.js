const Discord = require('discord.js');

module.exports = (client, guild, user) => {
    client.guildDB.ensure(member.guild.id, client.guildDBDefaults);
    var logChannelId = client.guildDB.get(member.guild.id, "logChannel");
    if(logChannelId) {
        logServer = member.guild.channels.get(logChannelId);
        if (logServer) {
            const embed = new Discord.MessageEmbed()
            .setAuthor("User Ban Removed")
            .setColor(client.config.embedcolor)
            .setImage(member.user.avatarURL({format: 'png', size: 2048}))
            .addField("Id", `${member.user.tag} (${member.user.id})`)
            .setFooter(new Date().toUTCString());
            logServer.send({embed});
        }
    }
    
    client.log.info(`${user.tag} was unbanned from ${guild.name}`);
};