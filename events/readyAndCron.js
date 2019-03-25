const fetch = require('node-fetch');
const Discord = require('discord.js');
var cron;

module.exports = (client) => {
    client.log.info(`Logged in as ${client.user.tag}!`);
    if (client.config.ownerlogging) {
        for(i = 0; i < client.config.ownerid.length; i++) {
            client.users.get(client.config.ownerid[i]).send(`I am now online.`);
        }
    }
    if (!cron) {
        setInterval(eventTimer, 1000*60, client);
    }
}

function eventTimer(client) {
    //console.log('Event Running');
    setRandomActivity(client);
    checkTwitchStreams(client);
}

function setRandomActivity(client) {
    var acts = client.config.statusList;
    if (acts.length >= 1) {
        client.user.setActivity(acts[Math.floor(Math.random()*acts.length)]);
    }
}

function checkTwitchStreams(client) {
    var chans = client.twitchDB.indexes;
    for (i=0; i < chans.length; i++) {
        const chan = chans[i];
        const user = client.twitchDB.get(chan);
        if(!(user.channels.length > 0)){
            client.twitchDB.delete(chan);
            return;
        }
        fetch(`https://api.twitch.tv/kraken/streams/${chan}`, {
            headers: { 'Client-ID': client.config.twitchClientId },
        }).then(res => res.json()).then(json => {
            if (json.stream == null) {
                if(user.sent)
                    client.twitchDB.setProp(chan, 'sent', false);
                return;
            } else {
                if(user.sent)
                    return; // post has already been sent, don't sent again
                ch = json.stream;
                const embed = new Discord.MessageEmbed()
                    .setAuthor(ch.channel.status, null, ch.channel.url)
                    .setColor(client.config.embedcolor)
                    .setTitle(`${ch.channel.display_name}\n${ch.channel.url}`)
                    .setURL(ch.channel.url)
                    .setThumbnail(ch.channel.logo)
                    .setImage(`${ch.preview.large}?ver=${Math.floor(Math.random() * 100000)}`)
                    .addField("Streaming", ch.game, true)
                    .addField("Viewers", `**${ch.viewers}**`, true)
                    .setFooter(`${ch.channel.followers} follower${(ch.channel.partner ? " | Partnered" : "")}${(ch.channel.mature ? " | Mature Stream" : "")}`);
                
                for(j=0; j < user.channels.length; j++){
                    client.channels.get(user.channels[j]).send(`Hey @everyone, ${ch.channel.display_name} is live!`,{embed});
                }
                client.twitchDB.setProp(chan, 'sent', true);
                return;
            }
        });

    }
}