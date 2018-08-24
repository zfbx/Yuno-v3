const rand = require('../../functions/random.js');

exports.run = async (client, message, args) => {
    var side = (rand(0, 1)) ? "Heads" : "Tails"; //1 is heads
    if (args[0]) {
        var guess;
        if (/head/i.test(args[0])) {
            guess = "Heads";
        } else if (/tail/i.test(args[0])){
            guess = "Tails";
        } else {
            guess = "Indistinguishable"
        }

        if (side === guess) {
            return message.channel.send(`You win! The coin landed on ${side}!`);
        } else {
            return message.channel.send(`You lose! The coin landed on ${side} but your guess was: ${guess} :(`);
        }
    } else {
        return message.channel.send(`The coin landed on.. ${side}!`);
    }
};

exports.info = {
    name: 'coinflip',
    aliases: ['flipcoin'],
    usage: ["coinflip", "coinflip heads"],
    module: "Games",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Flip a coin! specify heads or tails to bet or leave it blank to just see the outcome."
};