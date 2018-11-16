module.exports = (client, err) => {
    if (err) {
        client.log.error(String(err).replace(client.token, '[TOKEN-HERE]'));
    } else {
        client.log.error('There was.. some kind of error apparently.');
    }
}