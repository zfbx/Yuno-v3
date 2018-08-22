const rand = require('../../functions/random.js');
const fetch = require('node-fetch');


function postComic(message, json) {
    message.channel.send(`**${json.safe_title}** [${json.num}]`, {
        files: [json.img]
    });
}

exports.run = async (client, message, args) => {

    var url = `https://xkcd.com/info.0.json`;
    var maxnum;
    fetch(url)
        .then(res => res.json())
        .then(json => {
            maxnum = Number(json.num);

            if (args[0]) {
                var search = Number(args[0]);
                if (search == NaN || search > maxnum) {
                    message.channel.send('That\'s not a valid comic number.')
                } else if (search === 0) {
                    postComic(message, json);
                } else {
                    var newurl = `https://xkcd.com/${search}/info.0.json`;
                    fetch(newurl)
                        .then(res => res.json())
                        .then(json => {
                            postComic(message, json);
                        });
                }
            } else {
                var newurl = `https://xkcd.com/${rand(1, maxnum)}/info.0.json`;
                fetch(newurl)
                    .then(res => res.json())
                    .then(json => {
                        postComic(message, json);
                    });
            }
            //console.log(json);
            //console.log(json[0].preview);
        });
};

exports.info = {
    name: 'xkcd',
    aliases: [],
    usage: ["xkcd", "xkcd 615"],
    module: "Search",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Get a random xkcd comic. add the comic number to the command to recieve a specific comic. request comic 0 and you'll get the most recent."
};