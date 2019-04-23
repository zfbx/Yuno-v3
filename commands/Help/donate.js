var msg = `A lot of work goes into the projects I make, Yuno esspecially, and if you would really help support this as well as more work like this you can become a **Patron** (<https://www.patreon.com/zfbx>) or send a donation through **Paypal** (<https://www.paypal.me/zfbx>)\nThank you so much for your support in regardless, even if just by using Yuno yourself ♥`;


exports.run = async (client, message, args) => {
    message.author.send(msg).then(message => {
            return message.react('❤');
        })
        .catch(e => {
            return message.channel.send(msg);
        });
    
};

exports.info = {
    name: 'donate',
    aliases: ['support', 'patreon', 'paypal'],
    usage: ["donate"],
    module: "Help",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Gives information on how you can help support development of this bot."
};