const rand = require('../../functions/random.js');
const fetch = require('node-fetch');
const banned_tags = ['child', 'childs', 'childporn', 'children', 'youngs', 'young', 'loli', 'cub'];

exports.run = async (client, message, args) => {

    var url = 'https://yande.re/post.json?limit=100&tags=';
    if (!args) {
        url = 'https://yande.re/post.json?limit=100';
    } else {
        for (var i = 0; i < args.length; i++) {
            if (banned_tags.indexOf(args[i].toLowerCase()) > -1 ) {
                return message.channel.send(`This tag is banned.`);
            } 
        }
        url += args.join('+');
    }
    //TODO: Pulls really large photos, maybe try preview_url or jpeg_url instead of file_url
    fetch(url)
        .then(res => res.json())
        .then(json => {
            if (json.length > 0) {
                var post = json[rand(0, json.length-1)];
                message.channel.send(`**Full Size:** <${post.file_url}>`, {
                    files: [post.preview_url]
                });
            } else {
                return message.channel.send('No images found.');
            } 
            
        });
};

exports.info = {
    name: 'yandere',
    aliases: [],
    usage: ["yandere"],
    module: "NSFW",
    nsfw: true,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Show a random set of boobs [Only works in nsfw flagged channels]"
};