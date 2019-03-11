exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`https://google.com`);
    }
    message.channel.send(`http://www.google.com/search?tbm=isch&q=${args.join('+')}&pws=0`);
};

exports.info = {
    name: 'googleimage',
    aliases: ['gi'],
    usage: ['googleimage Yuno Gasai'],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "When you wanna share a google photo search with people in the server."
};