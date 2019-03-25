exports.run = async (client, message, args) => {
    if (!args[0])
        return message.channel.send(`Please provide the name of the channel to remove. Example: ${client.config.prefix}twitch zfbx`);

    if (args[0].toLowerCase().includes('twitch.tv'))
        return message.channel.send(`please only put the name of the channel example: ${client.config.prefix}twitch zfbx`);

    var stream = args[0].toLowerCase().replace(/[^0-9\_\-a-z]/g, '');

    client.twitchDB.ensure(stream, {sent: false, channels: []});

    client.twitchDB.remove(stream, message.channel.id, 'channels');
    return message.channel.send(`Channel removed.`);
    
};

exports.info = {
    name: 'remtwitch',
    aliases: [],
    usage: ["remtwitch zfbx"],
    module: "Administration",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Removed twitch channel from alerting in channel."
};