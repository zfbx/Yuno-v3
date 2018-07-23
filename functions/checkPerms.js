
module.exports = (client, message, reqPerms) => {

    if (client.config.ownerid.includes(message.author.id) ||
        message.member.hasPermission('ADMINISTRATOR') ||
        message.member.hasPermission(reqPerms)) {
            
            return {run: true, msg = ''};
    }

    //if DM - allow

    //if Administrator - allow
    //message.member.hasPermission('ADMINISTRATOR');


    //check each permission
    //message.member.hasPermission('KICK_MEMBERS');



    //check if bot has permissions to run the command
    //if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);


};

/*
ADMINISTRATOR (implicitly has all permissions, and bypasses all channel overwrites)
CREATE_INSTANT_INVITE (create invitations to the guild)
KICK_MEMBERS
BAN_MEMBERS
MANAGE_CHANNELS (edit and reorder channels)
MANAGE_GUILD (edit the guild information, region, etc.)
ADD_REACTIONS (add new reactions to messages)
VIEW_AUDIT_LOG
VIEW_CHANNEL
SEND_MESSAGES
SEND_TTS_MESSAGES
MANAGE_MESSAGES (delete messages and reactions)
EMBED_LINKS (links posted will have a preview embedded)
ATTACH_FILES
READ_MESSAGE_HISTORY (view messages that were posted prior to opening Discord)
MENTION_EVERYONE
USE_EXTERNAL_EMOJIS (use emojis from different guilds)
CONNECT (connect to a voice channel)
SPEAK (speak in a voice channel)
MUTE_MEMBERS (mute members across all voice channels)
DEAFEN_MEMBERS (deafen members across all voice channels)
MOVE_MEMBERS (move members between voice channels)
USE_VAD (use voice activity detection)
CHANGE_NICKNAME
MANAGE_NICKNAMES (change other members' nicknames)
MANAGE_ROLES
MANAGE_WEBHOOKS
MANAGE_EMOJIS
*/