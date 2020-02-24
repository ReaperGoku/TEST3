module.exports = async (client, message) => {
    const config = {
        prefix : process.env.PREFIX
    };

    if(message.channel.type === "dm") return;

    const permissions = message.channel.permissionsFor(message.guild.me); 

    if(message.author.bot)return;
    if(!message.guild)return;
    if(!message.content.startsWith(config.prefix))return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    if(!permissions.has("SEND_MESSAGES"))
    return message.member.send(`Don't have the permissions to Send Messages in ${message.channel} in ${message.guild}`); 
    

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0)return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(command)
    command.run(client, message, args);
};