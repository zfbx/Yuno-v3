exports.run = async (client, message, args) => {
    
    var output = "";

    client.guilds.map((guild) => {
        output += `**${guild.name}**\n    *(${guild.id})*\n`
    });
    message.channel.send(output).then().catch(e => {
        message.channel.send('Too many guilds to list here, check console');
        console.log(output);
    });
};

exports.info = {
    name: 'guildlist',
    aliases: ['listguilds', 'guildslist'],
    usage: ["guildlist"],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "List out guild names and Ids"
};