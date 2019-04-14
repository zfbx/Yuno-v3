exports.run = async (client, message, args) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    if (args[0]) {
        var rolename = args.join(" ");
        var roleid = message.guild.roles.find(role => role.name === rolename).id;
        if (!roleid) {
            return message.channel.send(`Role could not be found`);
        }
        client.guildDB.set(message.guild.id, roleid, "termsRole");
        return message.channel.send(`users who use .acceptterms will be given the role: ${rolename}(${roleid})`);
    } else {
        client.guildDB.set(message.guild.id, "", "termsRole");
        return message.channel.send("TermsRole disabled in this server.");
    }
};

exports.info = {
    name: 'termsrole',
    aliases: [],
    usage: ["termsrole RoleName", "termsrole"],
    module: "Administration",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Gives the specified role when a user enters the .acceptterms command. If you don't add a role it'll disabled this feature in the server"
};