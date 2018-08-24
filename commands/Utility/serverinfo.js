const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setDescription(`${message.guild.name}'s Information and Details`)
        .setThumbnail(message.guild.iconURL())
        .setColor(client.config.embedcolor)
        .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
        .addField('Members', `${message.guild.members.filter(member => member.user.bot).size} bots of ${message.guild.memberCount} members.`)
        .addField('Channels', `${message.guild.channels.filter(chan => chan.type === 'voice').size} voice / ${message.guild.channels.filter(chan => chan.type === 'text').size} text`)
        .addField('Roles', message.guild.roles.map(role => role.name).join(', '));
    message.channel.send({ embed });
};

exports.info = {
    name: 'serverinfo',
    aliases: ['sinfo', 'server'],
    usage: ['serverinfo'],
    module: "Utility",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Get information about the server you're in."
};