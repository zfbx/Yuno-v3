const Discord = require('discord.js');
const time = require('../functions/time');

module.exports = (client, member) => {
    client.log.info(`${member.user.tag} (${member.id}) is no longer in ${member.guild.name} (${member.guild.id})`);
    
    client.guildDB.ensure(member.guild.id, client.guildDBDefaults);

    var logChannelId = client.guildDB.get(member.guild.id, "logChannel");
    if(logChannelId) {
        logServer = member.guild.channels.get(logChannelId);
        if (logServer) {
            const embed = new Discord.MessageEmbed()
                .setAuthor("User left")
                .setColor(client.config.embedcolor)
                .setImage(member.user.avatarURL({format: 'png', size: 2048}))
                .addField("Id", `${member.user.tag} (${member.user.id})`)
                .addField("Joined Discord", time.stamp(new Date(member.user.createdTimestamp)), true)
                .setFooter(time.stamp());
            logServer.send({embed});
        }
    }
}