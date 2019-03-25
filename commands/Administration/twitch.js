exports.run = async (client, message, args) => {
    if (!args[0])
        return message.channel.send(`Please provide the name of the channel to monitor. Example: ${client.config.prefix}twitch zfbx`);

    if (args[0].toLowerCase().includes('twitch.tv'))
        return message.channel.send(`please only put the name of the channel example: ${client.config.prefix}twitch zfbx`);

    var stream = args[0].toLowerCase().replace(/[^0-9\_\-a-z]/g, '');

    client.twitchDB.ensure(stream, {sent: false, channels: []});

    //if(client.twitchDB.hasProp(stream, message.channel.id))
        //return message.channel.send(`This channel is already configured to recieve live alerts from that twitch channel.`);
    
    client.twitchDB.push(stream, message.channel.id, 'channels');
    return message.channel.send(`Channel added.`);
    
};

exports.info = {
    name: 'twitch',
    aliases: [],
    usage: ["twitch zfbx"],
    module: "Administration",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Set twitch channel alerts to post in the channel command run in to alert whenever that twitch channel goes live."
};