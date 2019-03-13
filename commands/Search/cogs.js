const cogs = require('../../data/ttr-cogs.json');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`Which cog do you want info on:\n${Object.keys(cogs).join(', ')}`);
    }

    arg = args;
    for(i=0; i < arg.length; i++) {
        arg[i] = arg[i].charAt(0).toUpperCase() + arg[i].toLowerCase().slice(1);
    }
    var cog = cogs[arg.join(' ')];
    if (!cog)
        return message.channel.send('I could not locate the cog you specifed');
    
    var locs = "";
    for (i=0; i < cog.locations.length; i++) {
        locs += cog.locations[i] + "\n"
    }
    const embed = new Discord.MessageEmbed()
        .setAuthor(arg.join(' '), "https://toontownrewritten.com/assets/images/base/logo_eyes.png", cog.wiki)
        .setColor(client.config.embedcolor)
        .setTitle(cog.type)
        .setThumbnail(cog.picture)
        .addField("Levels", cog.level, true)
        .addField("Damage", cog.damage, true)
        .addField("Locations", locs, true)
        .addField("Weakness", cog.weakness, true)
        .setFooter("Toontown Rewritten | " + message.author.tag);
    message.channel.send({embed});
    try {
        message.delete();
    } catch(e) {
        console.log(e)
    }
};

exports.info = {
    name: 'cogs',
    aliases: ['cog'],
    usage: ['cogs', 'cog Cold Caller'],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Lookup Toontown cogs to find where they are, and their weaknesses. Using the command without a name lists all cog names."
};