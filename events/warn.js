module.exports = (client, warn) => {
    if (warn) { //apparently this check has to be made? *If I wanna make sure no token is involved.
        client.log('WARN', String(warn).replace(client.token, '[TOKEN-HERE]'))
    } else {
        client.log('WARN', 'There was.. some kind of warning apparently.');
    }
}