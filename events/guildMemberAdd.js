const Discord = require('discord.js');

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
                .addField("Id", member.user.tag)
                .addField("Joined Discord", member.user.createdTimestamp, true)
                .setFooter(new Date().toUTCString());
            logServer.send({embed});
        }
    }
    
    //welcome message
    var welcomeMsg = client.guildDB.get(member.guild.id, "welcomeMessage");
    welcomeMsg = welcomeMsg.replace("{{user}}", member.user.tag); 
    //TODO: add more placeholders
    if (welcomeMsg !== "") {
        //member.guild.channels.get(client.guildDB.get(member.guild.id, "welcomeChannel"))
        //.send(welcomeMsg) TODO: CAUSE ISSUE
        //.catch(console.error);
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