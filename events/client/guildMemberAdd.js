const db = require("quick.db")
const discord = require('discord.js');
const Canvas = require('canvas');
const { getGetOrdinal } = require('../../functions.js')

module.exports = async(client, member) => {

	let wChan = db.fetch(`${member.guild.id}`)
  
	if(wChan == null) return;
	  
	if(!wChan) return;
	
	let count = member.guild.memberCount;
	let suffixed = getGetOrdinal(count);

	const channel = member.guild.channels.get(wChan);
	if (!channel) return;

	const canvas = Canvas.createCanvas(2560, 1440);
	const ctx = canvas.getContext('2d');
	try{
	const background = await Canvas.loadImage('https://i.pinimg.com/originals/94/fc/32/94fc32aec923940b18ba0a8e8e85e56d.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#ffffff';
	ctx.lineWidth = 50;
	ctx.strokeRect(150, 420, 600, 600);

	ctx.strokeStyle = '#ad0909';
	ctx.lineWidth = 30;
	ctx.strokeRect(5, 5, 2550, 1430);

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 150, 420, 600, 600);
	} catch(error) {
		console.log(error);
	}

	const attachment = new discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	try{
	channel.send(`Welcome to the server, ${member}`+ "\n" + 
	`You are the **${suffixed}** member!`+ "\n" +
	`📌 Dont forgot to read ${member.guild.channels.get('547101326019002409').toString()}` + "\n" +
	`📌 Check ${member.guild.channels.get('589503796913111149').toString()} for Role 👑`, {files: [attachment] });
	} catch(error) {
		console.log(error);
	}
};