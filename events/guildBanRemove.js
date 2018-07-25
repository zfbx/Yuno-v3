//const Discord = require('discord.js');

module.exports = (client, guild, user) => {
    client.log('INFO', `${user.tag} was unbanned from ${guild.name}`);
    //guild.defaultChannel.send(`${user.tag} was just unbanned!`);
    //const embed = new Discord.RichEmbed()
    //    .setColor(0x00AE86)
    //    .setTimestamp()
    //    .setDescription(`**Action:** Unban\n**Target:** ${user.tag}\n**Moderator:** ${guild.client.unbanAuth.tag}\n**Reason:** ${guild.client.unbanReason}`);
    //return guild.channels.get(guild.channels.find('name', 'mod-log').id).send({embed});

};