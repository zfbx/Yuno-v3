exports.run = async (client, message, args) => {
    //TODO: Iterate through roles with starting with Color# and check for members, if none, delete role
};

exports.info = {
    name: 'colorcleanup',
    aliases: [],
    usage: ["colorcleanup"],
    module: "Administration",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "cleans up abandoned/empty roles set by the color role system"
};