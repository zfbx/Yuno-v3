exports.run = (client, message, args) => {
    if (message.author.id != client.config.ownerid) return;
    message.channel.send(args.join(' '));
    message.delete();
};

exports.info = {
    name: 'say',
    aliases: ['echo'],
    usage: ["say Hi there!"],
    module: "Utility",
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Have me say something based on what you write"
};