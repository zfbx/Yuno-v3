exports.run = async (client, message, args) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    client.guildDB.set(message.guild.id, message.channel.id, "welcomeChannel");
    message.react('✅');
};

exports.info = {
    name: 'welcomechannel',
    aliases: ['welcomech'],
    usage: ["welcomechannel"],
    module: "Utility",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_CHANNELS'],
    botPermissions: ['SEND_MESSAGES'],
    description: "run this command in a channel you want server welcome messages to be sent in."
};