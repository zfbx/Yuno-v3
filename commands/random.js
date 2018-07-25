const rand = require('../functions/random.js');

exports.run = (client, message, args) => {
    if (args[0] && args[1]) {
        if (parseInt(args[0]) < parseInt(args[1])) {
            return message.channel.send(`Your random number between ${args[0]} and ${args[1]} is: ${rand(parseInt(args[0]), parseInt(args[1]))}`);
        } else {
            return message.channel.send('Please make sure the min number is first and max number is second');
        }
    } else {
        return message.channel.send('Please supply a minimum number and maximum number');
    }
};

exports.info = {
    name: 'random',
    aliases: ['rand'],
    usage: ["random 1 100"],
    module: "Utility",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Generate a psuedo-random number between to input numbers."
};