const glob = require('glob');
const logger = require('logger');
const Discord = require('discord.js');
const Enmap = require("enmap");
const client = new Discord.Client({
    //disableEveryone: true,
    disabledEvents: [
        'TYPING_START',
        'USER_NOTE_UPDATE'
    ]
});

client.guildDB = new Enmap({ 
    name: "guildDB",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: 'deep' 
});
client.twitchDB = new Enmap({ 
    name: "twitchDB", 
    fetchAll: true,
    autoFetch: true,
    cloneLevel: 'deep'  
});
client.userDB = new Enmap({ 
    name: "guildDB",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: 'deep' 
});

client.guildDBDefaults = {	
    prefix: ".",
    logChannel: "",
    logPics: true,
    logNames: true,
    logEdits: true,
    logRoles: true,
    logVoice: false,
    colorRoles: false,
    autoRole: "",
    termsRole: "",
    welcomeChannel: "",
    welcomeMessage: "Say hello to {{user}}, everyone!"
}

client.userDBDefaults = {
    username: "",
    points: 0,
    currency: 0,
    rep: 0,
    dailyReset: "",
    repReset: "",
    birthday: "",
    firstSeen: "",
    messageCount: 0,
    commandCount: 0
}

client.config = require('./config.js');
client.log = logger({
    mode: client.config.loglevel
});
client.time = require('./functions/time');
client.checkPerms = require('./functions/checkPerms');
client.token = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

function loadCommands(folder) {
    glob(`commands/${folder}/*.js`, (err, files) => {
        if (err) console.error(err);
        client.log.info(`${files.length} ${folder} commands found.`);
        files.forEach(f => {
            let props = require(`./${f}`);
            //client.log.debug(`Loading Command: ${props.info.name}.`); //very spammy with lots of commands
            client.commands.set(props.info.name, props);
            props.info.aliases.forEach(alias => {
                client.aliases.set(alias, props.info.name);
            });
        });
    });
}

loadCommands('Administration');
loadCommands('CustomReactions');
loadCommands('Fun');
loadCommands('Games');
loadCommands('Help');
loadCommands('Math');
loadCommands('NSFW');
loadCommands('Owner');
loadCommands('Search');
loadCommands('Utility');
loadCommands('XP');

client.on('ready', () => require('./events/readyAndCron')(client));
client.on('message', message => require('./events/message')(client, message));
client.on('messageUpdate', (oldMessage, newMessage) => require('./events/message')(client, newMessage, oldMessage));
client.on('guildCreate', guild => require('./events/guildCreate')(client, guild));
client.on('guildDelete', guild => require('./events/guildDelete')(client, guild));
client.on('messageDelete', message => require('./events/messageDelete')(client, message));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd')(client, member));
client.on('guildMemberUpdate', (oldMember, newMember) => require('./events/guildMemberUpdate')(client, oldMember, newMember));
client.on('guildMemberRemove', member => require('./events/guildMemberRemove')(client, member));
client.on('guildBanAdd', (guild, user) => require('./events/guildBanAdd')(client, guild, user));
client.on('guildBanRemove', (guild, user) => require('./events/guildBanRemove')(client, guild, user));
//client.on('userUpdate', (oldUser, newUser) => require('./events/userUpdate')(client, oldUser, newUser));
client.on('disconnect', () => require('./events/disconnect')(client));
client.on('reconnecting', () => require('./events/reconnecting')(client));
client.on('warn', warn => require('./events/warn')(client, warn));
client.on('error', err => require('./events/error')(client, err));

client.login(client.config.token);