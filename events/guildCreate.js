module.exports = (client, guild) => {
    client.log('Log', `I have been added to the guild: ${guild.name}, owned by: ${guild.owner.user.tag}, with ${guild.memberCount} members.`);
}
