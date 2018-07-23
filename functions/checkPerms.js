const Discord = require('discord.js');

module.exports = (client, message, reqPerms, serverOnly) => {
    if (message.channel.type == 'dm' || message.channel.type == 'group') {
        if (serverOnly) {
            return { run: false, msg: 'This command can only be run in a server.'};
        } else {
            return { run: true, msg: ''}; //Don't think I need to check permissions here
        }
    }
    if (client.config.ownerid.includes(message.author.id) ||
        message.member.hasPermission('ADMINISTRATOR') ||
        message.member.hasPermission(reqPerms, true, true)) {
        if (message.guild.member(client.user).hasPermission(reqPerms, true)) {
            return {run: true, msg: ''};
        } else {
            var botperms = message.guild.member(client.user).missingPermissions(reqPerms, true);
            var reply;
            if (botperms.length > 1) {
                reply = `I'm missing the following permissions:`;
                for (i = 0; i < botperms.length; i++) {
                    reply += ` ${botperms[i]},`;
                }
                reply = reply.slice(0, -1) + '.';
            } else {
                reply = `I'm missing the following permission: ${botperms[0]}.`;
            }
            return { run: false, message: reply };
        }
    } else {
        var perms = message.member.missingPermissions(reqPerms, true);
        var reply;
        if (perms.length > 1) {
            reply = `I'm sorry, you are missing the following permissions:`;
            for (i = 0; i < perms.length; i++) {
                reply += ` ${perms[i]},`;
            }
            reply = reply.slice(0, -1) + '.';
        } else {
            reply = `I'm sorry you're missing the following permission: ${perms[0]}.`;
        }
        return { run: false, message: reply };
    }
};