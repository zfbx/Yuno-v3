exports.run = (client, message, args) => {
        var total = args.reduce((prev, arg) => prev + parseFloat(arg), 0);
		return message.reply(`${args.join(' + ')} = **${total}**`);
};

exports.info = {
    name: 'add',
    aliases: ['addition', 'sum'],
    usage: ["add 4 56 76"],
    module: "Utility",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Add up any ammount of numbers together and recieve the sum"
};