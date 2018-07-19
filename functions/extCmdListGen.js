const fs = require('fs');

module.exports = (client, commandArray) => {
    if (!commandArray) return;

    client.log("CMD-GEN", "Reading command template..");
    var template = fs.readFileSync('../docs/CmdListTemplate.html', "utf8");
    var num = 1, cl = "", time = new Date();

    client.log("CMD-GEN", "Processing command structures..");
    /*
    for (var key in cmds) {
        for (var i = 0; i < cmds[key].length; i++) {
            cl += `<div class="command" id="${num}" data-module="${key.toLocaleLowerCase()}"><div class="command-name">`;
            for (var j = 0; j < cmds[key][i]["Aliases"].length; j++) {
                cl += `<span>${cmds[key][i]["Aliases"][j]}</span>`;
            }
            cl += `<span class="module ${key.toLocaleLowerCase()}">${key}<span></div>
                <div class="description"><section>${cmds[key][i]["Description"]}</section>`;
            if (cmds[key][i]["Requirements"].length !== 0) {
                cl += `<section class="description-warning"><span>Requires</span><section class="required-permissions">`;
                for (var k = 0; k < cmds[key][i]["Requirements"].length; k++) {
                    cl += `<span class="permission">${cmds[key][i]["Requirements"][k]}</span>`;
                }
                cl += `</section></section>`;
            }
            cl += `</div><div class="usage"><span class="cell-parts">`;
            for (var l = 0; l < cmds[key][i]["Usage"].length; l++) {
                cl += `<span class="cell-part">${cmds[key][i]["Usage"][l]}</span>`;
            }
            cl += `</span></div></div>`;
            console.log(`Added Command #${num}`);
            num++;
        }
    }
    */

    client.log("CMD-GEN", "Saving New Command List..");
    template = template.replace(/{{COMMANDS}}/, cl).replace(/{{timestamp}}/, time);
    fs.writeFileSync('../docs/index.html', template, function (err) {
        if (err) throw err;
        client.log("CMD-GEN", "Commands Saved!");
    });
};

/*
<div class="command">
<div class="command-name">
    <span>.delmsgoncmd</span>
    <span>.delmsgoncmsdd</span>
    <span class="module administration">Administration</span>
</div>
<div class="description">
    <section>Toggles the automatic deletion of the user's successful command message to prevent chat flood. You can
        use it either as a server toggle, channel whitelist, or channel blacklist, as channel option has
        3 settings: Enable (always do it on this channel), Disable (never do it on this channel), and Inherit
        (respect server setting). Use
        <code>list</code> parameter to see the current states.</section>
    <section class="description-warning">
        <span>Requires</span>
        <section class="required-permissions">
            <span class="permission">Administrator Server Permission</span>
        </section>
    </section>
</div>
<div class="usage">
    <span class="cell-parts">
        <span class="cell-part">.delmsgoncmd</span>
        <span class="cell-part">.delmsgoncmd channel enable</span>
        <span class="cell-part">.delmsgoncmd channel inherit</span>
        <span class="cell-part">.delmsgoncmd list</span>
    </span>
</div>
</div>
*/