exports.run = (client, message, args) => {
    message.channel.send('Pong...').then(msg => {
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
    });
};

exports.info = {
    name: 'ping',
    aliases: ['pong'],
    serverOnly: false,
    description: "Simply test the ping responce time to the bot",
    requires: [],
    usage: ["ping"],
    module: "Utility"
};