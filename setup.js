const prompt = require('prompt');
var fs = require('fs');

prompt.message = "";
prompt.delimiter = ":";
var schema = {
    properties: {
        token: {
            description: 'Discord Bot Token',
            pattern: /^[a-zA-Z-_0-9.]+$/,
            type: 'string',
            message: 'Input doesn\'t match a discord token',
            hidden: true,
            replace: '*',
            required: true
        },
        ownerid: { //142831624868855808
            description: 'Your Discord UserID',
            pattern: /^[0-9]{17,19}/,
            type: 'string',
            message: 'should be a number arround 18 characters long',
            default: '142831624868855808',
            required: true
        },
        prefix: {
            description: 'Bot Prefix',
            default: '.'
        }
    }
};
 
prompt.start();

prompt.get(schema, function (err, result) {
    console.log('Config:');
    console.log('  token: ' + '[HIDDEN]');
    console.log('  ownerid: ' + result.ownerid);
    console.log('  prefix: ' + result.prefix);
    var config = {
        'token': result.token,
        'ownerid': [result.ownerid],
        'ownerlogging': true,
        'prefix': result.prefix,
        'debugmode': false,
        'embedcolor': 16755385
    }

    var json = JSON.stringify(config, null, 4);

    fs.writeFileSync('config.json', json, 'utf8');

    console.log('Config Generated.');
});