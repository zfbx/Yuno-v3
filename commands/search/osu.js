const fetch = require('node-fetch');
const fs = require('fs');

exports.run = async (client, message, args) => {
    var mode = 0;
    if(!args[0]) {
        return message.channel.send('Please include the username of who\'s profile to get');
    }
    message.channel.send('Searching for OSU profile...').then(msg => {
        var url = `http://lemmmy.pw/osusig/sig.php?uname=${args[0]}&flagshadow&xpbar&xpbarhex&pp=2&mode=${mode}`;

        temp = `${__dirname}/../../data/temp/osu${args[0].replace(/([^\w\d])+/g, '')}.png`
    
        fetch(url).then(image => image.body
            .pipe(fs.createWriteStream(temp))
            .on('close', () => {
                message.channel.send({
                    files: [temp]
                });
                msg.delete();
            }));
    });
};

exports.info = {
    name: 'osu',
    aliases: [],
    usage: ["osu [username]"],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Get an OSU profile summery"
};