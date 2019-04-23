exports.run = async (client, message, args) => {
    var gdb = client.guildDB.get(message.guild.id);
    if (!gdb.termsRole)
        return message.channel.send(`This feature is not enabled in this server, you have need for it.`);

    var role = message.guild.roles.get(gdb.termsRole);
    if (role) {
        message.member.roles.add(role);
    }

    return message.delete();
    
};

exports.info = {
    name: 'acceptterms',
    aliases: ['iaccept', 'accept', 'accepttermsandconditions', 'agree'],
    usage: ["acceptterms"],
    module: "Utility",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Accept terms and conditions in a server getting a role with access if this feature enabled"
};