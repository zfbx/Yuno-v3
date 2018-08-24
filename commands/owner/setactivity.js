exports.run = async (client, message, args) => {
    if (!args[0]) {
        client.user.setActivity('')
        return message.channel.send('Activity set to none');
    } else {
        if (args[1].toLowerCase().includes('http')) {
            var type = args[0];
            var url = args[1];
            args.shift();
            args.shift();
            client.user.setActivity(args.join(' '), {url: url, type: type})
            return message.channel.send(`Activity set to ${type}: ${args.join(' ')} on <${url}>`);
        } else {
            var type = args[0];
            args.shift();
            client.user.setActivity(args.join(' '), {type: type});
            return message.channel.send(`Activity set to ${type}: ${args.join(' ')}`);
        }
    }
};

exports.info = {
    name: 'setactivity',
    aliases: ['game', 'setgame'],
    usage: ["setactivity PLAYING Minecraft", "setactivity STREAMING https://twitch.tv/zfbx Grand Theft Auto V"],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "set [PLAYING, STREAMING, LISTENING, WATCHING] activity with link "
};