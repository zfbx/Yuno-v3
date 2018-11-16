const rand = require('../../functions/random.js');

exports.run = async (client, message, args) => {
    if (args[0] && args[1]) {
        if (parseInt(args[0]) < parseInt(args[1])) {
            return message.channel.send(`Your random number between ${args[0]} and ${args[1]} is: ${rand(parseInt(args[0]), parseInt(args[1]))}`);
        } else {
            return message.channel.send(`Your random number between ${args[1]} and ${args[0]} is: ${rand(parseInt(args[1]), parseInt(args[0]))}`);
        }
    } else if (args[0]) {
        return message.channel.send(`Your random number between 1 and ${args[0]} is: ${rand(1, parseInt(args[0]))}`);
    } else {
        return message.channel.send('Please supply a minimum number and maximum number');
    }
};

exports.info = {
    name: 'random',
    aliases: ['rand'],
    usage: ["random 1 100"],
    module: "Utility",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Generate a psuedo-random number between to input numbers."
};