const rand = require('../../functions/random.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var url = `http://api.obutts.ru/butts/${rand(0, 4335)}`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            /*message.channel.send({ //send as file
                files: [`http://media.obutts.ru/${json[0].preview}`]
            });*/
            const embed = new Discord.MessageEmbed()
                .setAuthor("obutts.ru", "", "http://obutts.ru")
                .setColor(client.config.embedcolor)
                .setImage(`http://media.obutts.ru/${json[0].preview}`)
                .setFooter(`Request by: ${message.author.tag}`);
            message.channel.send({embed});

            try {
                message.delete();
            } catch(e){
                console.log(e);
            }
        });

};

exports.info = {
    name: 'butts',
    aliases: ['butt'],
    usage: ["butts"],
    module: "NSFW",
    nsfw: true,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Show a random butt picture [Only works in nsfw flagged channels]"
};