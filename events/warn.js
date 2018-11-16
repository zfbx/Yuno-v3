module.exports = (client, warn) => {
    if (warn) {
        client.log.warn(String(warn).replace(client.token, '[TOKEN-HERE]'))
    } else {
        client.log.warn('There was.. some kind of warning apparently.');
    }
}