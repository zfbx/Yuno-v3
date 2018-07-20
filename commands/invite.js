exports.run = (client, message, args) => {
    message.channel.send(`https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot`)
};

exports.info = {
    name: 'invite',
    aliases: ['h'],
    serverOnly: false,
    description: "Invite the bot to join a server",
    requires: ['Owner'],
    usage: ["invite"],
    module: "Administration"
};