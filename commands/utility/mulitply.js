exports.run = async (client, message, args) => {
        var total = args.reduce((prev, arg) => prev * parseFloat(arg), 0);
		return message.reply(`${args.join(' * ')} = **${total}**`);
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