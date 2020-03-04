const db = require("quick.db")
const discord = require('discord.js');

module.exports = async(client, member) => {

	let wChan = db.fetch(`${member.guild.id}`)
  
	if(wChan == null) return;
	  
	if(!wChan) return;

	const channel = member.guild.channels.get(wChan);
    if (!channel) return;

    user = member.displayName.toString();
    
    channel.send(`\*\*\*${user} just left the server\*\*\*`);
};