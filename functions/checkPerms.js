module.exports = (client, message, cmd) => {
    if (message.channel.type == 'dm' || message.channel.type == 'group') {
        if (cmd.serverOnly) {
            return { run: false, msg: 'This command can only be run in a server.'};
        } else {
            if (cmd.ownerOnly) {
                if (client.config.ownerid.includes(message.author.id)) {
                    return { run: true, msg: ''};
                } else {
                    return { run: false, msg: 'Only bot owners are allowed to run this command.'}; 
                }
            } else {
                return { run: true, msg: ''}; 
            }
        }
    }
    if (client.config.ownerid.includes(message.author.id) ||
        message.member.hasPermission('ADMINISTRATOR') ||
        message.member.hasPermission(cmd.requires, true, true)) {
        if (message.guild.member(client.user).hasPermission(cmd.botPermissions, true)) {
            if (cmd.nsfw) {
                if(!message.channel.nsfw) {
                    return { run: false, msg: 'I\'m sorry, This command is nsfw and not permitted in this channel.'};
                } //else continue
            } //else continue
            return {run: true, msg: ''};
        } else {
            var botperms = message.guild.member(client.user).missingPermissions(cmd.botPermissions, true);
            var reply;

            if (botperms.includes('SEND_MESSAGES')) {
                client.log('ERROR', `Client tried to run command without giving me permissions to reply [user: ${message.user.tag} | Server: ${message.guild.name}]`);
                return {run: false, msg: ''}
            }else if (botperms.length > 1) {
                reply = `I'm missing the following permissions:`;
                for (i = 0; i < botperms.length; i++) {
                    reply += ` ${botperms[i]},`;
                }
                reply = reply.slice(0, -1) + '.';
            } else {
                reply = `I'm missing the following permission: ${botperms[0]}.`;
            }
            return { run: false, msg: reply };
        }
    } else {
        var perms = message.member.missingPermissions(cmd.requires, true);
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
        return { run: false, msg: reply };
    }
};
