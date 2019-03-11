const Discord = require('discord.js');

module.exports = (client, guild) => {
    client.users.fetch(client.config.ownerid[0]).then( user => {
        const embed = new Discord.MessageEmbed()
        .setColor(client.config.embedcolor)
        .setAuthor('Server Deleted/Left')
        .addField('Name', `${guild.name}`)
        .addField('ID', `${guild.id}`)
        .addField('Owner', `${guild.owner.user.tag}`)
        .addField('Members', `${guild.memberCount}`)
        .setFooter(new Date().toUTCString());
        user.send({ embed }).catch(console.error);
    });
    client.log.info(`I have been from the guild: ${guild.name}, owned by: ${guild.owner.user.tag}, with ${guild.memberCount} members.`);

    client.guildDB.delete(guild.id);
}
