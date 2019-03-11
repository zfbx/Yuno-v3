const chars = {
    'a': ':regional_indicator_a:', 'b': ':regional_indicator_b:', 'c': ':regional_indicator_c:',
    'd': ':regional_indicator_d:', 'e': ':regional_indicator_e:', 'f': ':regional_indicator_f:',
    'g': ':regional_indicator_g:', 'h': ':regional_indicator_h:', 'i': ':regional_indicator_i:',
    'j': ':regional_indicator_j:', 'k': ':regional_indicator_k:', 'l': ':regional_indicator_l:',
    'm': ':regional_indicator_m:', 'n': ':regional_indicator_n:', 'o': ':regional_indicator_o:',
    'p': ':regional_indicator_p:', 'q': ':regional_indicator_q:', 'r': ':regional_indicator_r:',
    's': ':regional_indicator_s:', 't': ':regional_indicator_t:', 'u': ':regional_indicator_u:',
    'v': ':regional_indicator_v:', 'w': ':regional_indicator_w:', 'x': ':regional_indicator_x:',
    'y': ':regional_indicator_y:', 'z': ':regional_indicator_z:',
    '0': ':zero:', '1': ':one:', '2': ':two:', '3': ':three:', '4': ':four:', '5': ':five:',
    '6': ':six:', '7': ':seven:', '8': ':eight:', '9': ':nine:', '←': ':arrow_left:',
    '→': ':arrow_right:', '↑': ':arrow_up:', '↓': ':arrow_down:', '\#': ':hash:', '⁕': ':asterisk:'
}

exports.run = async (client, message, args) => {
    var phrase = args.join(' ').toLowerCase()
                            .replace(/[^0-9a-z<>#^&* ]/g, '')
                            .replace(/</g, '←')
                            .replace(/>/g, '→')
                            .replace(/\^/g, '↑')
                            .replace(/&/g, '↓')
                            .replace(/\*/g, '⁕');

    var re = new RegExp(Object.keys(chars).join("|"), "gi");
    var output = phrase.replace(re, function(match){
        return chars[match];
    });

    // TODO: if lastIndexOf() < string.length strip last characters preventing :regional_in
    return message.channel.send(output.substring(0,1999));
};

exports.info = {
    name: 'blocks',
    aliases: [],
    usage: ['blocks These are blocks', 'blocks Hi'],
    module: "Fun",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Convert a message from text into block emojis"
};