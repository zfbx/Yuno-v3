var hex = new RegExp("^([ABCDEF0-9]{6})$");

exports.run = async (client, message, args) => {
    var gdb = client.guildDB.get(message.guild.id);
    if (!gdb.colorRoles)
        return message.channel.send(`I'm sorry, this feature is not enabled in this server. an admin would need to run .colorroles`);
    if (args[0]) {
        var req = args[0].toUpperCase();
        if (hex.test(req)) {
            //todo check if color exist
                //if not create it.
            //find role based on name and set it to user
            return message.channel.send(``);
        } else {
            return message.channel.send(`Please only supply the 6 digit hex value without the #. Example: .color d83873`);
        }
    } else {
        return message.channel.send('What color would you like your username to be? Example: .color d83873\nfor help use this color picker https://www.google.com/search?q=color+picker');
    }
};

exports.info = {
    name: 'color',
    aliases: ['colorme', 'colorset'],
    usage: ["colorset #ffeeff"],
    module: "Utility",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "WIP - Set your username color to a color of your choice"
};