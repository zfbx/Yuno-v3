const escapeRegex = require('escape-string-regexp');

module.exports = (client, message, oldMessage) => {
    // Should the message even be considered?
    if (message.author.bot) return;
    else if(message.author.id === client.user.id) return;
    if(oldMessage && message.content === oldMessage.content) return;
    // Do they use the prefix or @Mention me?
    const escapedPrefix = escapeRegex(client.config.prefix);
    const prefixOrMention = new RegExp(`^(<@!?${client.user.id}>\\s+(?:${escapedPrefix}\\s*)?|${escapedPrefix}\\s*)`, 'i');
    if (!prefixOrMention.test(message.content)) return;

    var args = message.content.replace(prefixOrMention, '').split(/ +/g);
    var command = args[0].toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong...').then(msg => {
            msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
        });
    }

    else if (command === 'cmds') {
        require('../functions/extCmdListGen')("test");
    }

    else {
        message.channel.send('idk what you mean.');
    }

    client.log('Debug', args);
} 