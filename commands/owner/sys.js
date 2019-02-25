const Discord = require('discord.js');
const os = require('os');

exports.run = async (client, message, args) => {
    var cpus = os.cpus();
    var cpumsg = `**Model:** ${cpus[0].model}\n`;
    var cpuusage = 0, cpufree = 0;
    for (i = 0; i < cpus.length; i++) {
        var total = (cpus[i].times.user + cpus[i].times.nice + cpus[i].times.sys + cpus[i].times.irq);
        cpuusage += total;
        cpufree += cpus[i].times.idle
        cpumsg += `**Core ${i} @ ${cpus[i].speed}MHz**
    User: ${cpus[i].times.user} | Sys: ${cpus[i].times.sys}
    Idle: ${cpus[i].times.idle} | Total Usage: ${total} (${Math.round((total/(cpus[i].times.idle + total)) * 100)}%)\n`;
    } // | Nice: ${cpus[i].times.nice} | Irq: ${cpus[i].times.irq}

    if (args[0] && args[0].toLowerCase() == 'cpu') {
        message.channel.send(cpumsg).catch(client.log.error(err));
    } else {
        const embed = new Discord.MessageEmbed()
        .setColor(client.config.embedcolor)
        .setAuthor('System Information')
        .addField('Uptime', `${client.time.sinceMs(os.uptime()*1000)}`)
        .addField('Used Memory', `${Math.round((((os.totalmem() - os.freemem()) / 1000000) + 0.00001) * 100) / 100}mb`, true)
        .addField('Free Memory', `${Math.round(((os.freemem() / 1000000) + 0.00001) * 100) / 100}mb`, true)
        .addField('Total Memory', `${Math.round(((os.totalmem() / 1000000) + 0.00001) * 100) / 100}mb`, true)
        .addField('CPU', `Usage: ${cpuusage} Free: ${cpufree}
                            ${Math.round(((cpuusage/(cpufree+cpuusage)) * 100))}%`, true)
        message.channel.send({ embed }).catch(console.error);
    }
};

exports.info = {
    name: 'sys',
    aliases: ['system'],
    usage: ['sys', 'sys cpu'],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Grabs the connected systems information. append 'cpu' to the command to get a system wide cpu core breakdown"
};