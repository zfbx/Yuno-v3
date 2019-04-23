const Discord = require('discord.js');
const time = require('../../functions/time');

exports.run = async (client, message, args) => {
    
    //TODO: Add ability to only delete messages without pictures
    //TODO: Add ability to delete only messages from this bot
    if (args[0]) {
        if(Number(args[0]) > 1 || Number(args[0]) < 101) {
            //const fetched = await message.channel.messages.last(args[0]);
            message.channel.bulkDelete(Number(args[0])) //fetched normally
                .catch(
                    error => message.channel.send(`Couldn't delete messages because of: ${error}`)
                );
            var logChannelId = client.guildDB.get(message.guild.id, "logChannel");
            if(logChannelId) {
                logServer = message.guild.channels.get(logChannelId);
                if (logServer) {
                    const embed = new Discord.MessageEmbed()
                        .setAuthor("Bulk Message Deletion")
                        .setColor(client.config.embedcolor)
                        .addField("Deleted By", `${message.author.tag} (${message.author.id})`)
                        .setFooter(time.stamp());
                    logServer.send({embed});
                }
            }
            //return message.channel.send(`Messages Deleted`).then(msg.delete(3));
        } else {
            return message.channel.send("Please provide a number between 2 and 100");
        }
    } else {
        return message.channel.send("Please provide a number between 2 and 100");
    }
};

exports.info = {
    name: 'prune',
    aliases: ["delete", "purge"],
    usage: ["prune 20"],
    module: "Administration",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_MESSAGES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_MESSAGES'],
    description: "Deletes up to 100 messages (as long as they're not over 2 weeks old [Discord limitation])"
};