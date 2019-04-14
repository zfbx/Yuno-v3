exports.run = async (client, message, args) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    var gdb = client.guildDB.get(message.guild.id);
    if (gdb.colorRoles)  {
        client.guildDB.set(message.guild.id, false, "colorRoles");
        return message.channel.send("Color roles have now been disabled in this server.");
    } else {
        client.guildDB.set(message.guild.id, true, "colorRoles");
        return message.channel.send("Color roles are now enabled in this server.");
    }
};

exports.info = {
    name: 'colorroles',
    aliases: [],
    usage: ["colorroles"],
    module: "Administration",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "toggles allowing users in the server to set the color of their username through a command"
};