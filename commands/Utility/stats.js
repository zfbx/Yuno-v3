const Discord = require('discord.js');
const pkg = require('../../package.json');

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setDescription(`status and info`)
        .setColor(client.config.embedcolor)
        .setAuthor(client.user.tag, '', pkg.homepage)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=256`)
        .setFooter('Created: ' + client.time.stamp())
        .addField('Created By', pkg.author, true)
        .addField('Users', client.users.size, true)
        .addField('Shard', `#0 / 1`, true)
        .addField('Presence', `${client.guilds.size} Servers
                                ${client.channels.filter(chan => chan.type === 'text').size} Text Ch
                                ${client.channels.filter(chan => chan.type === 'voice').size} Voice Ch`, true)
        .addField('Uptime', `${client.time.sinceMs(client.uptime)}`, true)
        .addField('Memory', `Used: ${Math.round(((process.memoryUsage().heapUsed / 1000000) + 0.00001) * 100) / 100}mb
                            Total: ${Math.round(((process.memoryUsage().heapTotal / 1000000) + 0.00001) * 100) / 100}mb
                            Libs: ${Math.round(((process.memoryUsage().rss / 1000000) + 0.00001) * 100) / 100}mb`, true)
        .addField('Bot Version', pkg.version, true)
        .addField('Discord Version', Discord.version, true)
        .addField('Node Version', process.version, true)
        //.addField('Members', `${message.guild.members.filter(member => member.user.bot).size} bots of ${message.guild.memberCount} members.`)
        //.addField('Channels', `${message.guild.channels.filter(chan => chan.type === 'voice').size} voice / ${message.guild.channels.filter(chan => chan.type === 'text').size} text`)
        //.addField('Created', client.user.createdAt);
    message.channel.send({ embed });
};

exports.info = {
    name: 'stats',
    aliases: ['version', 'v'],
    usage: ['stats'],
    module: "Utility",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Get important bot based information."
};