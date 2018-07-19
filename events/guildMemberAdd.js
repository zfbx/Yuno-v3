module.exports = (client, member) => {
    client.log('Log', `${member.user.tag} (${member.id}) has joined ${member.guild.name} (${member.guild.id})`);
}