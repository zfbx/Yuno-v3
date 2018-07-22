const fs = require('fs');
const moment = require('moment');
     
exports.run = (client, message, args) => {
    if (message.author.id != client.config.ownerid) return;
    var now = Date.now();
    message.channel.send('Generating Documents.');
    client.log("CMD-GEN", "Generating Docs..");
    var num = 1, cl = "", template = fs.readFileSync('./docs/CmdListTemplate.html', "utf8"), pre = client.config.prefix;
    client.commands.map(cmd => {
        cl += `<div class="command" id="${num}" data-module="${cmd.info.module.toLocaleLowerCase()}"><div class="command-name">`;
        cl += `<span>${pre}${cmd.info.name}</span>`;
        if (cmd.info.aliases.length !== 0) {
            for (var i = 0; i < cmd.info.aliases.length; i++) {
                cl += `<span>${pre}${cmd.info.aliases[i]}</span>`;
            }
        }
        cl += `<span class="module ${cmd.info.module.toLocaleLowerCase()}">${cmd.info.module}<span></div>
            <div class="description"><section>${cmd.info.description}</section>`;
        if (cmd.info.requires.length !== 0) {
            cl += `<section class="description-warning"><span>Requires</span><section class="required-permissions">`;
            for (var i = 0; i < cmd.info.requires.length; i++) {
                cl += `<span class="permission">${cmd.info.requires[i]}</span>`;
            }
            cl += `</section></section>`;
        }
        cl += `</div><div class="usage"><span class="cell-parts">`;
        for (var i = 0; i < cmd.info.usage.length; i++) {
            cl += `<span class="cell-part">${cmd.info.usage[i]}</span>`;
        }
        cl += `</span></div></div>`;
        console.log(`Added Command #${num}`);
        num++;
    });
    client.log("CMD-GEN", "Saving New Command List..");
    template = template.replace(/{{COMMANDS}}/, cl).replace(/{{timestamp}}/, moment().format('MMMM Do YYYY, h:mm:ss a'));
    fs.writeFileSync('./docs/index.html', template, function (err) {
        if (err) throw err;
    });
    client.log("CMD-GEN", "Commands Saved!");
    message.channel.send(`Docs generated! [Generated in ${Date.now() - now}ms]`);
};

exports.info = {
    name: 'docs',
    aliases: ['generate', 'helpdocs'],
    serverOnly: false,
    description: "Generate help documents",
    requires: ['Owner'],
    usage: ["docs"],
    module: "Administration"
};