const Discord = require('discord.js');

//TODO: Where to log this module? How does Nadeko tell which guilds to log user changes in? User.guilds? user.lastchannelid?

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
                    .setFooter(new Date().toUTCString());
                logServer.send({embed});

            }else { // idk what changed, log for debugging
                const embed = new Discord.MessageEmbed()
                    .setAuthor("Something changed for this user but I'm not sure what.")
                    .setColor(client.config.embedcolor)
                    .addField(newUser.user.tag, `(${newUser.id})`)
                    .setFooter(new Date().toUTCString());
                logServer.send({embed});
            }
        }
    }
}