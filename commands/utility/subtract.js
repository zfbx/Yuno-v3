exports.run = async (client, message, args) => {
        var total = args.reduce((prev, arg) => prev - parseFloat(arg), 0);
		return message.reply(`${args.join(' - ')} = **${total}**`);
};

exports.info = {
    name: 'subtract',
    aliases: ['difference'],
    usage: ["subtract 100 26"],
    module: "Utility",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Subtract a series of numbers from each other and recieve the difference"
};