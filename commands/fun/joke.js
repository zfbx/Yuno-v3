const jokes = require('../../data/jokes.json');
const rand = require('../../functions/random.js');

exports.run = async (client, message, args) => {
    message.channel.send(`${jokes[rand(0, jokes.length)]}`);
};

exports.info = {
    name: 'joke',
    aliases: [],
    usage: ['joke'],
    module: "Fun",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Have me tell a random joke."
};