var hex = new RegExp("^([ABCDEF0-9]{6})$");

exports.run = async (client, message, args) => {
    var gdb = client.guildDB.get(message.guild.id);
    if (!gdb.colorRoles)
        return message.channel.send(`I'm sorry, this feature is not enabled in this server. an admin would need to run .colorroles`);
    if (args[0]) {
        var req = args[0].toUpperCase();
        if (hex.test(req)) {
            //todo check if color exist
            var roleCheck = message.guild.roles.find(role => role.name === `YROLE-${req}`);
            var rolesToRemove = [];
            message.member.roles.each(role => {
                if(role.name.includes("YROLE-")){
                    rolesToRemove.push(String(role.id));
                }
            });
            console.log(rolesToRemove);


            if(!roleCheck) {
                message.guild.roles.create({
                    data: {
                      name: `YROLE-${req}`,
                      color: req,
                      permissions: ['SEND_MESSAGES']
                    },
                    reason: 'color role',
                  })
                    .then(role => {
                        if(rolesToRemove.length > 0){
                            for(i=0;i<rolesToRemove.length; i++) {
                                var temprole = message.guild.roles.get(rolesToRemove[i]);
                                if (temprole.members.length > 1) {
                                    message.member.removeRole(temprole).catch(console.error);
                                } else {
                                    temprole.delete('no longer contains users'); //delete the role
                                }  
                            }
                        }
                        message.member.roles.add(role).catch('a' + console.error);
                    }).catch('b' + console.error);
                return;
            } else {

                if(rolesToRemove.length > 0){
                    for(i=0;i<rolesToRemove.length; i++) {
                        var temprole = message.guild.roles.get(rolesToRemove[i]);
                        if (temprole.members.length > 1) {
                            message.member.roles.remove(temprole).catch('c' + console.error);
                        } else {
                            temprole.delete('no longer contains users'); //delete the role
                        }  
                    }
                }
                message.member.roles.add(roleCheck).catch('d' + console.error);
            }
                //if not create it.
            //find role based on name and set it to user
            return message.react(`✅`);
        } else {
            return message.channel.send(`Please only supply the 6 digit hex value without the #. Example: .color d83873`);
        }
    } else {
        return message.channel.send('What color would you like your username to be? Example: .color d83873\nfor help use this color picker https://www.google.com/search?q=color+picker');
    }
};

exports.info = {
    name: 'color',
    aliases: ['colorme', 'colorset'],
    usage: ["colorset #ffeeff"],
    module: "Utility",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "WIP - Set your username color to a color of your choice"
};