const enableDebug = require('../config.json').debugmode;

module.exports = (type, msg, title) => {
    if (type === "Debug" && enableDebug === false) return;

    if (!title) title = "";
    else title = " [${title}]"
    var time = new Date();
    console.log(`[${time.getHours()}:${addZero(time.getMinutes())}:${addZero(time.getSeconds())}] [${type}]${title} ${msg}`);
};

function addZero(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}