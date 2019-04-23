const Discord = require('discord.js');
const time = require('../functions/time');

module.exports = (client, member) => {
    client.log.info(`${member.user.tag} (${member.id}) has joined ${member.guild.name} (${member.guild.id})`);
    
    client.guildDB.ensure(member.guild.id, client.guildDBDefaults);

    var logChannelId = client.guildDB.get(member.guild.id, "logChannel");
    if(logChannelId) {
        logServer = member.guild.channels.get(logChannelId);
        if (logServer) {
            const embed = new Discord.MessageEmbed()
                .setAuthor("User joined")
                .setColor(client.config.embedcolor)
                .setImage(member.user.avatarURL({format: 'png', size: 2048}))
                .addField("Id", `${member.user.tag} (${member.user.id})`)
                .addField("Joined Discord", time.stamp(new Date(member.user.createdTimestamp)), true)
                .setFooter(time.stamp());
            logServer.send({embed});
        }
    }
    
    //welcome message
    var welcomeMsg = client.guildDB.get(member.guild.id, "welcomeMessage");
    var welcomeChannel = client.guildDB.get(member.guild.id, "welcomeChannel");
     
    //TODO: add more placeholders
    if (welcomeMsg !== "" && welcomeChannel !== "") {
        welcomeMsg = welcomeMsg.replace("{{user}}", member.user.id);
        member.guild.channels.get(welcomeChannel).send(welcomeMsg)
    }

    //autorole
    var autoRole = client.guildDB.get(member.guild.id, "autoRole");
    if (autoRole !== "") {
        if(!member.user.bot) {
            var role = member.guild.roles.get(autoRole);
            if (role) {
                member.roles.add(role);
            }
        }
    }
}