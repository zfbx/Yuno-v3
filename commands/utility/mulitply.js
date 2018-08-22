exports.run = async (client, message, args) => {
    var product = 0;
    for (i = 0; i < args.length; i++) {
        if (i == 0) {
            product = args[i];
        } else {
            product = parseFloat(product) * parseFloat(args[i]);
        }
    }
    return message.channel.send(`${args.join(' * ')} = **${product}**`);
};

exports.info = {
    name: 'multiply',
    aliases: ['product'],
    usage: ["multiply 5 26 53"],
    module: "Utility",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Multiply a series of numbers together and recieve the product"
};