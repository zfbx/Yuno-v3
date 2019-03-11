exports.run = async (client, message, args) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    if (args[0]) {
        var rolename = args.join(" ");
        var roleid = message.guild.roles.find(role => role.name === rolename).id;
        if (!roleid) {
            return message.channel.send(`Role could not be found`);
        }
        client.guildDB.set(message.guild.id, roleid, "autoRole");
        return message.channel.send(`New users will be given the role: ${rolename}(${roleid})`);
    } else {
        client.guildDB.set(message.guild.id, "", "autoRole");
        return message.channel.send("Autorole disabled in this server.");
    }
};

exports.info = {
    name: 'autorole',
    aliases: [],
    usage: ["autorole RoleName", "autorole"],
    module: "Administration",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Gives the specified role to any non-bot who joins the server automatically. If you don't add a role it'll disabled autorole in the server"
};