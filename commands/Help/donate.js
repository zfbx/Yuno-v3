
exports.run = async (client, message, args) => {
    message.author.send(`A lot of work goes into projects I made, including Yuno. If you really like my work and would like to help support more work like this you can become a **Patron** at \n<https://www.patreon.com/zfbx> \nor even send a single donation through **Paypal** at \n<https://www.paypal.me/zfbx> \n\nThank you so much for your support in any way you do, even if it's just through using Yuno yourself ♥`);
    message.react('❤');
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