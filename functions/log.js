const enableDebug = require('../config.json').debugmode;
const moment = require('moment');

module.exports = (type, msg, title) => {
    if (type === "Debug" && enableDebug === false) return;

    if (!title) title = "";
    else title = " [${title}]"
    console.log(`[${moment().format('HH:mm:ss')}] [${type}]${title} ${msg}`);
};