const Discord = require('discord.js');
const pkg = require('../package.json');
const moment = require('moment');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setDescription(`status and info`)
        .setColor(client.config.embedcolor)
        .setAuthor(client.user.tag, `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=128`, pkg.homepage)
        //.setThumbnail(client.user.defaultAvatarURL)
        .setFooter('Created: ' + moment(client.user.createdAt).format('MMMM Do YYY, h:mm:ss a'))
        .addField('Created By', pkg.author, true)
        .addField('Users', client.users.size, true)
        .addField('Shard', `#0 / 1`, true)
        .addField('Presence', `${client.guilds.size} Servers
                                ${client.channels.filter(chan => chan.type === 'text').size} Text Ch
                                ${client.channels.filter(chan => chan.type === 'voice').size} Voice Ch`, true)
        .addField('Uptime', `${moment().subtract(client.uptime, 'milliseconds').fromNow(true)}`, true)
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
    aliases: ['stat', 'version', 'v'],
    usage: ["stats"],
    module: "Utility",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Get bot server stats."
};