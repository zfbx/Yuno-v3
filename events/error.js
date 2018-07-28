module.exports = (client, err) => {
    if (err) { //apparently this check has to be made? *If I wanna make sure no token is involved.
        client.log('ERROR', String(err).replace(client.token, '[TOKEN-HERE]'));
    } else {
        client.log('ERROR', 'There was.. some kind of error apparently.');
    }
}