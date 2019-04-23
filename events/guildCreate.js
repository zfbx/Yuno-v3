const Discord = require('discord.js');
const time = require('../functions/time');

module.exports = (client, guild) => {
    client.users.fetch(client.config.ownerid[0]).then( user => {
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.embedcolor)
            .setAuthor('Server Joined')
            .addField('Name', `${guild.name}`)
            .addField('ID', `${guild.id}`)
            .addField('Owner', `${guild.owner.user.tag}`)
            .addField('Members', `${guild.memberCount}`)
            .setFooter(time.stamp());
        user.send({ embed }).catch(console.error);
    });
    client.log.info(`I have been added to the guild: ${guild.name}, owned by: ${guild.owner.user.tag}, with ${guild.memberCount} members.`);

    client.guildDB.ensure(guild.id, client.guildDBDefaults);
}
