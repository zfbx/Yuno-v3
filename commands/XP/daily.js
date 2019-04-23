const rand = require('../../functions/random.js');
const pkg = require('../../package.json');

exports.run = async (client, message, args) => {

    client.userDB.ensure(message.author.id, client.userDBDefaults);

    var date = new Date();
    var name = message.author.username;
    var day = (date.getMonth() + 1) + "-" + date.getDate();
    var reply;

    switch(day) {
        case '12-31': reply = `Happy New Year's Eve, ${name}. :clock11:`; break;
        case '12-26': reply = `Happy Kwanzaa, ${name}!`; break;
        case '12-25': reply = `:christmas_tree: **Merry Christmas, ${name}!** :gift:`; break;
        case '12-24': reply = `Merry Christmas Eve, ${name} :christmas_tree:`; break;
        case '12-13': reply = `Happy Chanukah/Hanukkah, ${name} :christmas_tree:`; break;
        case '10-31': reply = `:jack_o_lantern: Happy Halloween, ${name}! :bat:`; break;
        case '7-4': reply = `:fireworks: Happy 4th of July, ${name} :tada:`; break;
        case '3-4': reply = `:beer: Happy St. Patrick's Day, ${name} :four_leaf_clover:`; break;
        case '2-25': reply = `Hey, ${name} Did you know: Today is the birthday of the guy who wrote me, ${pkg.author} :D`; break;
        case '2-14': reply = `:two_hearts: Happy Valentine's Day, ${name} :love_letter:`; break;
        case '2-1': reply = `Did you know it's the 1st day of Black History Month, ${name}? :fist:`; break;
        case '1-15': reply = `Happy Martin Luther King Jr. Day, ${name}!`; break;
        case '1-1': reply = `**Happy New Year's, ${name}!** :tada:`; break;
        default:
            var num = rand(0, 13);
            switch(num) {
                case 0: reply = `Hello there, ${name}.`; break;
                case 1: reply = `Salutations, dear ${name}.`; break;
                case 2: reply = `G'day, ${name}!`; break;
                case 3: reply = `Ahoy, matey ${name}!`; break;
                case 4: reply = `Live long and prosper ${name}. :vulcan:`; break;
                case 5: reply = `Howdy, ${name} :cowboy:`; break;
                case 6: reply = `Yo ${name}!`; break;
                case 7: reply = `Whaddup ${name}?!`; break;
                case 8: reply = `Aloha ${name}`; break;
                case 9: reply = `Hola ${name}`; break;
                case 10: reply = `Ciao ${name}`; break; 
                case 11: reply = `こんにちは ${name}-さん!`; break;
                case 12: reply = `Waaazzzzuuupp ${name}?`; break; 
                case 13: reply = `Sup ${name}`; break;
            }
    }
    
    reply = reply + `\n**Here is where you would get a daily reward of [#?] credits**`;
    message.channel.send(reply);
};

exports.info = {
    name: "daily",
    aliases: ['dailies'],
    usage: ['daily'],
    module: "XP",
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "[wip] Recieve a daily reward for your interaction with me. :D"
};