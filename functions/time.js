
const months = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
const type = {31536000: 'year', 2592000: 'month', 86400: 'day', 3600: 'hour', 60: 'minute', 1: 'second'};

module.exports = {
    /**
     * subtracts one time from another and returns time since in friendly format
     * @param {string} past - Time in the past to compare to
     * @return {string} Friendly time in years, months, weeks, days, hours, minutes, seconds
     */
    sinceMs: function(past) {
        var msg = "";
        var seconds = Math.round(past/1000.0);
        //var seconds = past;
        /*
        var current = Math.round(new Date().getTime()/1000.0);
        console.log('Current: '+current);
        console.log('Past: '+past);
        var seconds = Math.floor((current - past) / 1000);*/
        msg += calcString(seconds, 31536000);
        seconds = seconds % 31536000;
        msg += calcString(seconds, 2592000);
        seconds = seconds % 2592000;
        msg += calcString(seconds, 86400);
        seconds = seconds % 86400;
        msg += calcString(seconds, 3600);
        seconds = seconds % 3600;
        msg += calcString(seconds, 60);
        seconds = seconds % 60;
        msg += calcString(seconds, 1);

        return msg.slice(0, -1);
    },

    /**
     * Returns a fancy timestamp
     * @return {string} Friendly timestamp
     */
    stamp: function() {
        var date = new Date();
        var ds = months[date.getMonth()];
        ds += th(date.getDate());
        ds += date.getFullYear();
        var minutes = `0${date.getMinutes()}`;
        ds += ` ${date.getHours()}:${minutes.slice(-2)}`;
        return ds;
    }
};

function calcString(seconds, period) {
    var reply = "";
    var interval = Math.floor(seconds / period);
    //console.log(interval);
    if (interval >= 1) {
        reply += `${interval} ${type[period]}`;
        if (interval > 1) {
            reply += "s";
        }
        reply += "\n";
    }
    return reply;
}

function th(num) {
    num = String(num);
    switch(num.slice(-1)) {
        case '1':
            return num + 'st ';
        case '2':
            return num + 'nd ';
        case '3':
            return num + 'rd ';
        default:
            return num + 'th ';
    }
}