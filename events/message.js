const escapeRegex = require('escape-string-regexp');

module.exports = (client, message, oldMessage) => {
    // Should the message even be considered?
    if (message.author.bot || message.system || message.author.id === client.user.id) return;
    if(oldMessage && message.content === oldMessage.content) return;
    // Do they use the prefix or @Mention me?
    const escapedPrefix = escapeRegex(client.config.prefix);
    const prefixOrMention = new RegExp(`^(<@!?${client.user.id}>\\s+(?:${escapedPrefix}\\s*)?|${escapedPrefix}\\s*)`, 'i');
    if (!prefixOrMention.test(message.content)) return;

    var args = message.content.replace(prefixOrMention, '').split(/ +/g);
    var commandRequest = args[0].toLowerCase();
    args.shift();
    //client.log('Debug', args);


    var command;
    if (client.commands.has(commandRequest)) {
        command = client.commands.get(commandRequest);
    } else if (client.aliases.has(commandRequest)) {
        command = client.commands.get(client.aliases.get(commandRequest));
    }
    if (command) {
        var info = command.info;
        var perm = client.checkPerms(client, message, info.requires, info.serverOnly);

        if (perm.run === true) {
            command.run(client, message, args);
        } else {
            message.reply(perm.msg);
        }
    }
} 