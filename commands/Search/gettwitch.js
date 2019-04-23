const fetch = require('node-fetch');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`Please provide the name of the channel to search. Example: ${client.config.prefix}twitch zfbx`);
    }
    var stream = args[0].replace(/[^0-9\.\_\-a-zA-Z]/g, '');
    fetch(`https://api.twitch.tv/kraken/streams/${stream}`, {
            headers: { 'Client-ID': client.config.twitchClientId },
        }).then(res => res.json()).then(json => {
            if (json.stream == null)
                return message.channel.send(`Stream either is offline or doesn't exist`);
            ch = json.stream;
            const embed = new Discord.MessageEmbed()
                .setAuthor(ch.channel.status, null, ch.channel.url)
                .setColor(client.config.embedcolor)
                .setTitle(`${ch.channel.display_name}\n${ch.channel.url}`)
                .setURL(ch.channel.url)
                .setThumbnail(ch.channel.logo)
                .setImage(`${ch.preview.large}?ver=${Math.floor(Math.random() * 100000)}`)
                .addField("Streaming", ch.game, true)
                .addField("Viewers", `**${ch.viewers}**`, true)
                .setFooter(`${ch.channel.followers} followers${(ch.channel.partner ? " | Partnered" : "")}${(ch.channel.mature ? " | Mature Stream" : "")}`);
            message.channel.send({embed});
        });
};

exports.info = {
    name: 'gettwitch',
    aliases: [],
    usage: ['gettwitch zfbx'],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Get info on a twitch stream."
};