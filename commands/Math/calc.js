const math = require("mathjs");
const limitedEval = math.eval
//http://mathjs.org/examples/index.html

//.calc sqrt(-4) crashes? but 4 wont

math.import({
    'import':     function () { return 'Function import is disabled' },
    'createUnit': function () { return 'Function createUnit is disabled' },
    'eval':       function () { return 'Function eval is disabled' },
    'parse':      function () { return 'Function parse is disabled' },
    'simplify':   function () { return 'Function simplify is disabled' },
    'derivative': function () { return 'Function derivative is disabled' }
  }, {override: true})

exports.run = async (client, message, args) => {
    try {
		message.channel.send(limitedEval(args.join(' ')));
	} catch(err) {
		if(err) {
            message.channel.send(`**${err.message}**`);
        }
	}
};

exports.info = {
    name: 'calc',
    aliases: ['calculate', 'math'],
    usage: ["calc (2+3)/4"],
    module: "Math",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Calculate different math formulas and expressions"
};