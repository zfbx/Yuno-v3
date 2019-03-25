exports.run = async (client, message, args) => {
    return message.channel.send(`https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot`);
};

exports.info = {
    name: 'invite',
    aliases: [],
    usage: ["invite"],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Invite the bot to join a server"
};