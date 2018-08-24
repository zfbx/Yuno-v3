exports.run = async (client, message, args) => { //Should this have a global cooldown considering it's 6 messages within 3 seconds?
    message.channel.send('**L**').then(msg => {
        setTimeout(function(){ 
            msg.edit(`**L I**`).then(msg => {
                setTimeout(function(){ 
                    msg.edit(`**L I S**`).then(msg => {
                        setTimeout(function(){ 
                            msg.edit(`**L I S T**`).then(msg => {
                                setTimeout(function(){ 
                                    msg.edit(`**L I S T E**`).then(msg => {
                                        setTimeout(function(){ 
                                            msg.edit(`**L I S T E N**`);
                                        }, 500);
                                    });
                                }, 500);
                            });
                        }, 500);
                    });
                }, 500);
            });
        }, 500);
    });
};

exports.info = {
    name: 'listen',
    aliases: [],
    usage: ["listen"],
    module: "Fun",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Fun little command (sorta) requested by DunesMcDoogal"
};