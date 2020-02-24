module.exports = {
    name : "newmember",
    aliases : ["nmemb"],
    description : "emiter",

    run : (client, message, args) => {
        
        client.emit('guildMemberAdd', message.member);
    }
};