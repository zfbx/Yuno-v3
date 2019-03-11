exports.run = async (client, message, args) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    client.guildDB.set(message.guild.id, "", "logChannel");
    message.react('✅');
};

exports.info = {
    name: 'removewelcomechannel',
    aliases: ['remwelcomech'],
    usage: ["removewelcomechannel"],
    module: "Utility",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_CHANNELS'],
    botPermissions: ['SEND_MESSAGES'],
    description: "Remove new user welcome message from the server"
};