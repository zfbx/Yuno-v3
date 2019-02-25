const rand = require('../../functions/random.js');

exports.run = async (client, message, args) => {
    if (args[0]) {
        var names = args.join(" ");
        names = names.split(", ");
        names = names.sort();
        var url = "https://wheeldecide.com/index.php?"
        for(i=0; i < names.length; i++) {
            url += `c${i+1}=${names[i].replace(/ /g, "+")}&`;
        }
        url += "time=5";

        return message.channel.send(`<${url}>`);
    } else {
        return message.channel.send(`What are the options?`);
    }
};

exports.info = {
    name: 'raffle',
    aliases: ['drawing'],
    usage: ["raffle Bob, Tim, Steve"],
    module: "Games",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Generates a link to a raffle drawing using wheeldecide.com"
};