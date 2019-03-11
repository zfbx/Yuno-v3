exports.run = async (client, message, args) => {
    if (args[0]) {
        if(message.guild) {
            return message.channel.send(message.mentions.members.first().user.avatarURL({format: 'png', size: 2048}));
        } else {
            return message.channel.send('Mentions only work in servers.');
        }
    } else {
        return message.channel.send(message.author.avatarURL({format: 'png', size: 2048}));
    }
};

exports.info = {
    name: 'profilePicture',
    aliases: ['pfp'],
    usage: ["profilePicture @Tony#1275"],
    module: "Utility",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Get the full size profile picture of a user"
};