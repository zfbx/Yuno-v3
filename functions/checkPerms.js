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

    if(cmd.ownerOnly && !client.config.ownerid.includes(message.author.id))
        return { run: false, msg: 'Only bot owners are allowed to run this command.'}; 

    if (client.config.ownerid.includes(message.author.id) ||
        message.member.hasPermission('ADMINISTRATOR') ||
        message.member.hasPermission(cmd.requires, true, true)) {
        if (message.guild.member(client.user).hasPermission(cmd.botPermissions, true)) {
            if (cmd.nsfw && !message.channel.nsfw)
                return { run: false, msg: 'I\'m sorry, This command is nsfw and not permitted in this channel.'};
                
            return {run: true, msg: ''};
        } else {
            if (!message.guild.member(client.user).hasPermission('SEND_MESSAGES', true)) {
                client.users.get(client.config.ownerid[i]).send(`Client tried to run command without giving me permissions to reply [user: ${message.user.tag} | Server: ${message.guild.name}]`);
                return {run: false, msg: ''}
            } else {
                reply = `I'm missing the required permission(s) to run this command.`;
            }
            return { run: false, msg: reply };
        }
    } else {
        return { run: false, msg: `I'm sorry, you are missing a required permission to run this command.` };
    }
};
