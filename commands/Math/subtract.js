exports.run = async (client, message, args) => {
    var difference = 0;
    for (i = 0; i < args.length; i++) {
        if (i == 0) {
            difference = args[i];
        } else {
            difference = parseFloat(difference) - parseFloat(args[i]);
        }
    }
    return message.channel.send(`${args.join(' - ')} = **${difference}**`);
};

exports.info = {
    name: 'subtract',
    aliases: ['difference'],
    usage: ["subtract 100 26"],
    module: "Math",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Subtract a series of numbers from each other and recieve the difference"
};