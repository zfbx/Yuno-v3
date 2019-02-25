const fetch = require('node-fetch');
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
    //client.log.debug('Event has been run!');
    setRandomActivity(client);
    //TODO: db of twitch stream urls and channel to post it in
    //checkTwitchStreams(client);
}
function setRandomActivity(client) {
    var acts = client.config.statusList;
    if (acts.length >= 1) {
        client.user.setActivity(acts[Math.floor(Math.random()*acts.length)]);
    }
}


function checkTwitchStreams(client) {
    var test = "kayleighthebunny";
    //var test = "ninja";
    var ch = "477674521885671456";
    //for (i = 0; i < client.twitchDB.length; i++) {
        fetch(`https://api.twitch.tv/kraken/streams/${test}`, {
            headers: { 'Client-ID': client.config.twitchClientId },
        }).then(res => res.json()).then(json => {
            //IF ACCOUNT NOT FOUND REMOVE FROM LIST
            //console.log(json);
            if (json.stream == null)
                return;
            console.log(`
                ${json.stream.game}
                ${json.stream.viewers}
                ${json.stream.created_at}
                ${json.stream.channel.updated_at}
                ${json.stream.channel.followers}
            `);
            client.channels.get(ch).send(`${test} is online streaming ${json.stream.game}`);
            /*if (alertChannel) {
                alertChannel;
            } else {
                //delete stream from database if it's the only one 
            }*/
            //if(json.)
        });
    //}
}

/*
$.getJSON('https://api.twitch.tv/kraken/streams/Jonathan_x64', function(channel) {
    if (channel["stream"] == null) { 
        window.alert("nie wow");
    } else {
        window.alert("wow");
    }
});
*/