const rand = require('../../functions/random.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');

function postComic(message, json, client) {
    /*message.channel.send(`**${json.safe_title}** [${json.num}]`, {
        files: [json.img]
    });*/

    const embed = new Discord.MessageEmbed()
        .setAuthor(json.safe_title, "", `https://xkcd.com/${json.num}/`)
        .setColor(client.config.embedcolor)
        .setImage(json.img)
        .setFooter("xkcd", "https://xkcd.com/s/0b7742.png");
    message.channel.send({embed});
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
                    postComic(message, json, client);
                } else {
                    var newurl = `https://xkcd.com/${search}/info.0.json`;
                    fetch(newurl)
                        .then(res => res.json())
                        .then(json => {
                            postComic(message, json, client);
                        });
                }
            } else {
                var newurl = `https://xkcd.com/${rand(1, maxnum)}/info.0.json`;
                fetch(newurl)
                    .then(res => res.json())
                    .then(json => {
                        postComic(message, json, client);
                    });
            }
            //client.log.debug(String(json));
            //client.log.debug(json[0].preview);
        });
};

exports.info = {
    name: 'xkcd',
    aliases: [],
    usage: ["xkcd", "xkcd 615"],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "Get a random xkcd comic. add the comic number to the command to recieve a specific comic. request comic 0 and you'll get the most recent."
};