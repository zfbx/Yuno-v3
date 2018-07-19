const Discord = require('discord.js');
const client = new Discord.Client({
    disableEveryone: true,
    disabledEvents: [
        'TYPING_START',
        'USER_NOTE_UPDATE'
    ]
});

client.config = require('./config.json');
client.version = require('./package.json').version;
client.log = require('./functions/log.js');


client.on('ready', () => require('./events/ready.js')(client));
client.on('message', message => require('./events/message.js')(client, message));
client.on('messageUpdate', (oldMessage, newMessage) => require('./events/message.js')(client, newMessage, oldMessage));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));


client.login(client.config.token);