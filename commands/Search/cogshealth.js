exports.run = async (client, message, args) => {
    //from https://www.tablesgenerator.com/text_tables#
    message.channel.send(`\`\`\`
╔═════╦════════╦═════════════════════════╗
║ Lvl ║ Health ║        1 Hit Kill       ║
╠═════╬════════╬═════════════════════════╣
║   1 ║    6   ║ Cupcake (6)             ║
╠═════╬════════╬═════════════════════════╣
║   2 ║   12   ║ Banana Peel (12)        ║
╠═════╬════════╬═════════════════════════╣
║   3 ║   20   ║ Rake (20)               ║
╠═════╬════════╬═════════════════════════╣
║   4 ║   30   ║ Anvil (30)              ║
╠═════╬════════╬═════════════════════════╣
║   5 ║   42   ║ Big Weight (45)         ║
╠═════╬════════╬═════════════════════════╣
║   6 ║   56   ║ Safe (60)               ║
╠═════╬════════╬═════════════════════════╣
║   7 ║   72   ║ Org Trap Door (77)      ║
╠═════╬════════╬═════════════════════════╣
║   8 ║   90   ║ Opera Singer (90)       ║
╠═════╬════════╬═════════════════════════╣
║   9 ║   110  ║ Org Birthday Cake (110) ║
╠═════╬════════╬═════════════════════════╣
║  10 ║   132  ║ Org Wedding Cake (132)  ║
╠═════╬════════╬═════════════════════════╣
║  11 ║   156  ║ Grand Piano (170)       ║
╠═════╬════════╬═════════════════════════╣
║  12 ║   200  ║ Org Railroad (214)      ║
╚═════╩════════╩═════════════════════════╝
\`\`\``);

};

exports.info = {
    name: 'coghealth',
    aliases: [],
    usage: ['coghealth'],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Get Table of cog healthbars for toontown based on level"
};