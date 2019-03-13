const fetch = require('node-fetch');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var url = `http://aws.random.cat/meow`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            /*message.channel.send({
                files: [json.file]
            });*/
            const embed = new Discord.MessageEmbed()
                .setAuthor("random.cat", "", "http://random.cat")
                .setColor(client.config.embedcolor)
                .setImage(json.file)
                .setFooter(`Request by: ${message.author.tag}`);
            message.channel.send({embed});
        });
        try {
            message.delete();
        } catch(e){
            console.log(e);
        }

};

exports.info = {
    name: 'cat',
    aliases: ['meow'],
    usage: ["cat"],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Random cat photo! Meow."
};