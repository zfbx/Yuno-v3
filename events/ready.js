const pkg = require('../package.json');

module.exports = (client) => {
    client.log('Log', `Logged in as ${client.user.tag}!`);
    if (client.config.ownerlogging) {
        for(i = 0; i < client.config.ownerid.length; i++) {
            client.users.get(client.config.ownerid[i]).send(`I am now online.`);
        }
    }
}