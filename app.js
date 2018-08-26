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
client.log = require('./functions/log');
client.checkPerms = require('./functions/checkPerms');
client.token = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

glob('commands/**/*.js', {recursive: true}, (err, files) => {
    if (err) console.error(err);
    client.log('Loading', `${files.length} commands found.`);
    files.forEach(f => {
        let props = require(`./${f}`);
        //client.log('Loading', `Loading Command: ${props.info.name}. `);
        client.commands.set(props.info.name, props);
        props.info.aliases.forEach(alias => {
            client.aliases.set(alias, props.info.name);
        });
    });
});

client.on('ready', () => require('./events/ready')(client));
client.on('message', message => require('./events/message')(client, message));
client.on('messageUpdate', (oldMessage, newMessage) => require('./events/message')(client, newMessage, oldMessage));
client.on('guildCreate', guild => require('./events/guildCreate')(client, guild));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd')(client, member));
client.on('guildMemberRemove', member => require('./events/guildMemberRemove')(client, member));
client.on('guildBanAdd', (guild, user) => require('./events/guildBanAdd')(client, guild, user));
client.on('guildBanRemove', (guild, user) => require('./events/guildBanRemove')(client, guild, user));
client.on('disconnect', () => require('./events/disconnect')(client));
client.on('reconnecting', () => require('./events/reconnecting')(client));
client.on('warn', warn => require('./events/warn')(client, warn));
client.on('error', err => require('./events/error')(client, err));

client.login(client.config.token);