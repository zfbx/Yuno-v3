module.exports = (client, member) => {
    client.log.info(`${member.user.tag} (${member.id}) is no longer in ${member.guild.name} (${member.guild.id})`);
    //member.guild.defaultChannel.send(`Please welcome ${member.user.username} to the server!`);
}