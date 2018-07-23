const Discord = require('discord.js');
const pkg = require('../package.json');

exports.run = (client, message, args) => {
    //console.log(client.user.avatar);
    const embed = new Discord.MessageEmbed()
        .setDescription(`status and info`)
        .setColor(client.config.embedcolor)
        .setAuthor(client.user.tag + ' ' + pkg.version, `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=128`, pkg.homepage)
        //.setThumbnail(client.user.defaultAvatarURL)
        .setFooter('Created by ' + pkg.author)
        .addField('Members', `${message.guild.members.filter(member => member.user.bot).size} bots of ${message.guild.memberCount} members.`)
        .addField('Channels', `${message.guild.channels.filter(chan => chan.type === 'voice').size} voice / ${message.guild.channels.filter(chan => chan.type === 'text').size} text`)
        .addField('Joined Discord', client.user.createdAt);
    message.channel.send({ embed });
};

exports.info = {
    name: 'stats',
    aliases: ['stat'],
    usage: ["stats"],
    module: "Utility",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Get bot server stats."
};