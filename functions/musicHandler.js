
var streams = {};
/* 
{
    'guild-id': {
        mode: 'playing',
        vchannel: 'vloicechannelid',
        channel: 'text channel initiated from',
        songlist: {
            0: [
                name: 'Just a song',
                requestedby: 'userid',
                url: 'url'
            ]
        }
    }
}
*/

module.exports = (method, client, message) => {

    var guild = message.guild.id;
    var user = message.author.id;

    if (method === 'play') {
        return 'play';

    } else if (method === 'pause') {
        return 'pause';

    } else if (method === 'stop') {
        return 'stop';

    } else if (method === 'clear') {
        return 'clear';

    } else if (method === 'vol') {
        return 'vol';

    } else if (method === 'list') {
        return 'list';
        
    } else {
        return;
    }

};

function calcString() {
    
    return reply;
}
