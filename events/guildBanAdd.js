module.exports = (client, guild) => {
    //guild.defaultChannel.send(`${user.username} was just banned!`);
    client.log.info(`${user.username} was just banned from ${guild.name}`);
}