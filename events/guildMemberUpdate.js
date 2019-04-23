const Discord = require('discord.js');
const time = require('../functions/time');

Array.prototype.diff = function(a) { // Not seeming to work with discord.js objects as the "ref diff isn't a function"
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

module.exports = (client, oldMember, newMember) => {
    client.guildDB.ensure(newMember.guild.id, client.guildDBDefaults);
    var logChannelId = client.guildDB.get(newMember.guild.id, "logChannel");
    if(logChannelId) {
        logServer = newMember.guild.channels.get(logChannelId);
        if(logServer) {
            if(oldMember.roles.array().length !== newMember.roles.array().length) { //check if the roles changed
                var addorremoved = "Role Added";
                if (oldMember.roles.array().length > newMember.roles.array().length) { //role removed
                    addorremoved = "Role Removed";
                }
                //var roles = newMember.roles.filter(function(i) {return oldMember.roles.array().indexOf(i) > 0;});
                //var roles = newMember.roles.diff(oldMember.roles);
                //console.log(roles.values()[0]); //TODO: Something is broken in here and i'm not sure what
                //var role = newMember.guild.roles.get(roles.first());
                //console.log(role);
                const embed = new Discord.MessageEmbed()
                    .setAuthor(addorremoved)
                    .setColor(client.config.embedcolor)
                    .addField(newMember.user.tag, `(${newMember.id})`)
                    .setFooter(time.stamp());
                    if(addorremoved === "Role Added") {
                        for (const role of newMember.roles.map(x => x.id)) {
                            if (!oldMember.roles.has(role)) {
                                embed.addField(`Role`, `${oldMember.guild.roles.get(role).name} (${newMember.guild.roles.get(role).id})`);
                            }
                        }
                    } else {
                        for (const role of oldMember.roles.map(x => x.id)) {
                            if (!newMember.roles.has(role)) {
                                embed.addField(`Role`, `${newMember.guild.roles.get(role).name} (${newMember.guild.roles.get(role).id})`);
                            }
                        }
                    }
                    
                    
                    //.addField("Role", `${roles.name} (${roles.id})`)
                    logServer.send({embed});

            } else if (oldMember.nickname !== newMember.nickname) { // check for nickname change
                var oldn = "**No Nickname**";
                var newn = "**No Nickname**";
                var namec = "Nickname Changed";
                if(oldMember.nickname !== null) {
                    namec = "Nickname Added";
                    oldn = oldMember.nickname;
                }
                if (newMember.nickname !== null) {
                    namec = "Nickname Removed";
                    newn = newMember.nickname;
                }
                const embed = new Discord.MessageEmbed()
                    .setAuthor(namec)
                    .setColor(client.config.embedcolor)
                    .addField(newMember.user.tag, `(${newMember.id})`)
                    .addField("Old: ", oldn)
                    .addField("New: ", newn)
                    .setFooter(time.stamp());
                logServer.send({embed});
            } else { // idk what changed, log for debugging
                const embed = new Discord.MessageEmbed()
                    .setAuthor("Something changed for this user but I'm not sure what.")
                    .setColor(client.config.embedcolor)
                    .addField(newMember.user.tag, `(${newMember.id})`)
                    .setFooter(time.stamp());
                logServer.send({embed});
            }
        }
    }
}