module.exports = (client, member) => {
    client.log.info(`${member.user.tag} (${member.id}) has joined ${member.guild.name} (${member.guild.id})`);
    //member.guild.defaultChannel.send(`Please welcome ${member.user.username} to the server!`);
}