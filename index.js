const glob = require('glob');
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
client.checkPerms = require('./functions/checkPerms.js');
client.token = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

//Load Commands
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

glob('commands/*.js', {matchBase:true}, (err, files) => {
    if (err) console.error(err);
    client.log('Loading', `${files.length} commands found.`);
    files.forEach(f => {
        let props = require(`./${f}`);
        client.log('Loading', `Loading Command: ${props.info.name}. `);
        client.commands.set(props.info.name, props);
        props.info.aliases.forEach(alias => {
            client.aliases.set(alias, props.info.name);
        });
    });
});



client.on('ready', () => require('./events/ready.js')(client));
client.on('message', message => require('./events/message.js')(client, message));
client.on('messageUpdate', (oldMessage, newMessage) => require('./events/message.js')(client, newMessage, oldMessage));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));
client.on('warn', warn => console.warn(warn.replace(client.token, '[TOKEN-HERE]')));
client.on('error', err => console.error(err.replace(client.token, '[TOKEN-HERE]')));

client.login(client.config.token);