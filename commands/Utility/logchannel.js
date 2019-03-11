exports.run = async (client, message, args) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    client.guildDB.set(message.guild.id, message.channel.id, "logChannel");
    message.react('✅');
};

exports.info = {
    name: 'logchannel',
    aliases: ['logch'],
    usage: ["logchannel"],
    module: "Utility",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_CHANNELS'],
    botPermissions: ['SEND_MESSAGES'],
    description: "run command in the channel you want server logging to be outputted to"
};