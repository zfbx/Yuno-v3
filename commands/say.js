exports.run = (client, message, args) => {
    if (message.author.id != client.config.ownerid) return;
    message.channel.send(args.join(' '));
    message.delete();
};

exports.info = {
    name: 'say',
    aliases: ['echo'],
    serverOnly: false,
    description: "Have me say something based on what you write",
    requires: ['BOT_OWNER'],
    usage: ["say Hi there!"],
    module: "Utility"
};