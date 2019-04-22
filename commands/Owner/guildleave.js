exports.run = async (client, message, args) => {
    
    if(!args[0])
        return message.channel.send('What guild would you like me to leave?');

    var guild = client.guilds.get(args[0]);

    if (guild) {
        guild.leave().then(g => message.channel.send(`I have left the guild ${g}`))
        .catch(console.error);
    } else {
        return message.channel.send(`I couldn't find that guild to leave.`);
    }
};

exports.info = {
    name: 'guildleave',
    aliases: ['leaveguild'],
    usage: ["leaveguild 12345678901234567"],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Leave selected guild by ID"
};