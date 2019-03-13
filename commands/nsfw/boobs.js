const rand = require('../../functions/random.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var url = `http://api.oboobs.ru/boobs/${rand(0, 10330)}`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            /*message.channel.send({ //download then resend the photo
                files: [`http://media.oboobs.ru/${json[0].preview}`]
            });*/
            const embed = new Discord.MessageEmbed()
                .setAuthor("oboobs.ru", "", "http://oboobs.ru")
                .setColor(client.config.embedcolor)
                .setImage(`http://media.oboobs.ru/${json[0].preview}`)
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
    name: 'boobs',
    aliases: ['boob'],
    usage: ["boobs"],
    module: "NSFW",
    nsfw: true,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Show a random set of boobs [Only works in nsfw flagged channels]"
};