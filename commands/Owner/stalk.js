exports.run = async (client, message, args) => {
    if (args[0]) {
        var json = JSON.stringify(message.mentions.members.first().user, null, 2);
        var fs = require('fs');
        fs.writeFileSync('../stalk.json', json);
        return message.channel.send(message.mentions.members.first().user.avatarURL({format: 'png', size: 2048}));

    } else {
        return message.channel.send('who?');
    }
};

exports.info = {
    name: 'stalk',
    aliases: [],
    usage: ["stalk @Tony#1275"],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Output all data on a user in a json file"
};