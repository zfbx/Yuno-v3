exports.run = async (client, message, args) => {
    message.channel.send('Pong...').then(msg => {
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
    });
};

exports.info = {
    name: 'ping',
    aliases: [],
    usage: ["ping"],
    module: "Utility",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Simple ping request/response time test for bot"
};