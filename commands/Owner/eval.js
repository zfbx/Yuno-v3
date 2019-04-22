const { inspect } = require('util');

exports.run = async (client, message, args) => {

    if (message.author.id !== client.config.ownerid[0]) return;
    
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      message.channel.send(inspect(evaled)).then().catch(e => {
          //console.log(e);
          message.channel.send('Reply might of been too long, check the console.');
      });
      console.log(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error during evaluation.');
    }
};

exports.info = {
    name: 'eval',
    aliases: ['evals'],
    usage: ["eval 1+1"],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "run javascript commands through discord for testing purposes. Add s for a silent (console only) eval"
};