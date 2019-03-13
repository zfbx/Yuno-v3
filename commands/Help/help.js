//TODO: Output commands based on user's permissions? or just nix Owner commands?
exports.run = async (client, message, args) => {
    if (!args[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(`= Command List =\n\n[Use ${client.config.prefix}help <commandname> for details]\n
            ${client.commands.map(c => `${client.config.prefix}${c.info.name}${' '.repeat(longest - c.info.name.length)} :: ${c.info.description}`).join('\n')}`, {code:'asciidoc'});
    } else {
        let command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.channel.send(`= ${command.info.name} = \n${command.info.description}\nusage::${command.info.usage}`, {code:'asciidoc'});
        } else if (client.aliases.has(command)) {
            command = client.commands.get(client.aliases.get(command));
            message.channel.send(`= ${command.info.name} = \n${command.info.description}\nusage::${command.info.usage}`, {code:'asciidoc'});
        }
    }
};

exports.info = {
    name: 'help',
    aliases: ['h'],
    usage: ["help", "help ping"],
    module: "Help",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Pretty self explanitory don't you think?"
};