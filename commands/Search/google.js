exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`https://google.com`);
    }
    message.channel.send(`http://www.google.com/search?q=${args.join('+')}&pws=0`);
};

exports.info = {
    name: 'google',
    aliases: ['g'],
    usage: ['google Yuno Gasai'],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "When you wanna share a google search term with people in the server."
};