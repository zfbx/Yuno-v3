const escapeRegex = require('escape-string-regexp');

module.exports = (client, message, oldMessage) => {

    if (message.author.bot) return;
    else if(message.author.id === client.user.id) return;
    if(oldMessage && message.content === oldMessage.content) return;


    var escapedPrefix = escapeRegex(client.config.prefix);
    //pattern = new RegExp(`^(<@!?${client.user.id}>\\s+(?:${escapedPrefix}\\s*)?|${escapedPrefix}\\s*)([^\\s]+)`, 'i');
    pattern = new RegExp(`^(<@!?${client.user.id}>\\s+(?:${escapedPrefix}\\s*)?|${escapedPrefix}\\s*)`, 'i');

    if (!pattern.test(message.content)) return;
    var msg = message.content.replace(pattern, '');
    var args = msg.split(/ +/g);
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

    client.log('Log', args);
} 