module.exports = (client, message) => {
    var chid = message.channel.id;
    
    
    if (chid === "566980758107848711"){
        if (message.content !== ".accept" && !client.config.ownerid.includes(message.author.id))
            message.delete();
    }
}