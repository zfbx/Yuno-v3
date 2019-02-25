exports.run = async (client, message, args) => {
    if (args[0]) {
        if(message.guild) {
            return message.channel.send(message.mentions.members.first().id);
        } else {
            return message.channel.send('Mentions only work in servers.');
        }
    } else {
        return message.channel.send(message.author.id);
    }
};

exports.info = {
    name: 'userid',
    aliases: ['uid'],
    usage: ["userid", "userid @Tony#1275"],
    module: "Utility",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Returns the user id of the person who ran the command or the person mentioned"
};