const rand = require('../../functions/random.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {

    if(!message.channel.nsfw || !message.channel.type == 'dm') {
        return message.channel.send('I\'m sorry, This command is not permitted in this channel.');
    }
    var url = `http://api.oboobs.ru/boobs/${rand(0, 10330)}`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            //console.log(json);
            //console.log(json[0].preview);
            message.channel.send({
                files: [`http://media.oboobs.ru/${json[0].preview}`]
            });
        });

};

exports.info = {
    name: 'boobs',
    aliases: ['boob'],
    usage: ["boobs"],
    module: "NSFW",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Show a random set of boobs [Only works in nsfw flagged channels]"
};