const rand = require('../../functions/random.js');
const fetch = require('node-fetch');

exports.run = (client, message, args) => {
    
    if(!message.channel.nsfw || !message.channel.type == 'dm') {
        return message.channel.send('I\'m sorry, This command is not permitted in this channel.');
    }
    var url = `http://api.obutts.ru/butts/${rand(0, 4335)}`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            message.channel.send({
                files: [`http://media.obutts.ru/${json[0].preview}`]
            });
        });

};

exports.info = {
    name: 'butts',
    aliases: ['butt'],
    usage: ["butts"],
    module: "NSFW",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Show a random butt picture [Only works in nsfw flagged channels]"
};