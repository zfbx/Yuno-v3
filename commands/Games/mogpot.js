const rand = require('../../functions/random.js');

exports.run = async (client, message, args) => {
    if (args[0]) {
        var count = Number(args[0])
        if (count) {
            return message.channel.send(`The Mogpot Prize for ${count} entries is: $${(50000*count)*0.65} Gil`);
        } else {
            return message.channel.send(`How many people entered?`);
        }
    } else {
        return message.channel.send(`How many people entered?`);
    }
};

exports.info = {
    name: 'mogpot',
    aliases: ['mp'],
    usage: ["mogpot 5"],
    module: "Games",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Gets the prize ammount based on how many people enter the company pot."
};