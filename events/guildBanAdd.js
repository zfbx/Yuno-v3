module.exports = (client, guild) => {
    //guild.defaultChannel.send(`${user.username} was just banned!`);
    client.log('INFO', `${user.username} was just banned from ${guild.name}`);
}