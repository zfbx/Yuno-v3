exports.run = async (client, message, args) => {
    message.channel.send(`( ͡° ͜ʖ ͡°)`);
};

exports.info = {
    name: 'lenny',
    aliases: [],
    usage: ['lenny'],
    module: "Fun",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "When you really need a ( ͡° ͜ʖ ͡°)"
};