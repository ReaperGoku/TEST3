module.exports = {
    name : "leavemember",
    aliases : ["nmemb"],
    description : "emiter",

    run : (client, message, args) => {
        
        client.emit('guildMemberRemove', message.member);
    }
};