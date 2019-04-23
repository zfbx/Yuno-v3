module.exports = (client, message) => {
    var chid = message.channel.id;
    var msg = message.content;
    var uid = message.author.id;
    
    
    if (chid === "566980758107848711"){
        if (msg !== ".accept" && !client.config.ownerid.includes(uid))
            message.delete();
    }

    if (chid === "569276257817067560") {
        if (uid !== "194794229849915394" && !client.config.ownerid.includes(uid)){
            if(msg !== ".agree" || msg !== ".accept")
                message.delete();
        }
    }
}