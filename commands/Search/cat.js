const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    var url = `http://aws.random.cat/meow`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            message.channel.send({
                files: [json.file]
            });
        });

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