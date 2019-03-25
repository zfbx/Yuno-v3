exports.run = async (client, message, args) => {
    process.exit();
};

exports.info = {
    name: 'restart',
    aliases: ['stop'],
    usage: ["restart"],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Restart/close Bot [relies on PM2 restarting process]"
};