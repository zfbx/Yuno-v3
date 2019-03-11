const rand = require('../../functions/random.js');
const emojis = require('../../data/emojis.json');

exports.run = async (client, message, args) => {
    if (args[0]) {
        var count = Number(args[0])
        if (count) {
            if (count > 40 || count < 1) {
                return message.channel.send(`That value is out of range [1-40]`);
            } else {
                return message.channel.send(getEmojis(count));
            }
            
        } else {
            return message.channel.send(`How many should I post?`);
        }
    } else {
        return message.channel.send(getEmojis(1));
    }
};

function getEmojis(c) {
    var numbers = [];
    for (i = 0; i < c; i++) {
        looking = true;
        while(looking === true) {
            var num = rand(0, emojis.length);
            if (!numbers.indexOf(num) > -1) {
                numbers.push(num);
                looking = false;
            }
        }
    }
    var reply = "";
    for (n in numbers) {
        reply += emojis[numbers[n]];
    }
    return reply;
}

exports.info = {
    name: 'emoji',
    aliases: ['remoji', 'randomemoji'],
    usage: ["emoji", "emoji 3"],
    module: "Fun",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Returns a random unicode emoji, adding a number returns that many unique random emojis (up to 40)"
};