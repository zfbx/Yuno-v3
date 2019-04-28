module.exports = (client, message, oldMessage) => {

    if (message.author.bot || message.system || message.author.id === client.user.id) return;
    if(oldMessage && message.content === oldMessage.content) return;
    // Do they use the prefix or @Mention me?
    const escapedPrefix = client.config.prefix.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'); //escape particular characters
    const prefixOrMention = new RegExp(`^(<@!?${client.user.id}>\\s+(?:${escapedPrefix}\\s*)?|${escapedPrefix}\\s*)`, 'i');
    if (!prefixOrMention.test(message.content)){
        if (!message.guild) { //just a fun method of logging messages and images sent to the bot in DM 
            client.users.fetch(client.config.ownerid[0], true)
                .then(function (user) {
                    var attachments = "";
                    message.attachments.forEach(function(at) {
                        attachments += at.url + ' ';
                    });
                    user.send(`**${message.author.tag} (${message.author.id}):** ${message} ${attachments}`);
                });
        }
        return;
    };

    var args = message.content.replace(prefixOrMention, '').split(/ +/g);
    var commandRequest = args[0].toLowerCase();
    args.shift();
    
    var command;
    if (client.commands.has(commandRequest)) {
        command = client.commands.get(commandRequest);
    } else if (client.aliases.has(commandRequest)) {
        command = client.commands.get(client.aliases.get(commandRequest));
    }
    if (command) {
        var perm = client.checkPerms(client, message, command.info);
        var location = "DM";
        if (message.guild) { location = message.guild.name };

        if (perm.run === true) {
            client.log.info(`[CMD] "${commandRequest}" in "${location}" by ${message.author.tag}`);
            try {
                command.run(client, message, args);
            } catch (e) {
                message.reply('Something went horribly wrong..');
            }
        } else {
            client.log.warn(`[CMD] "${commandRequest}" failed in "${location}" by ${message.author.tag}`);
            if (perm.msg !== '') {
                message.reply(perm.msg);
            }
        }
    }
} 