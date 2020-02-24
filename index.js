const { Client, Collection} = require("discord.js");
const fs = require("fs"); 

const client = new Client(); 
require('dotenv-flow').config();

client.categories = fs.readdirSync("./commands/");

const config = {
    token : process.env.TOKEN,
};

["commands", "aliases"].forEach(x => client[x] = new Collection()); // a new map for commands

["command", "event"].forEach(handler => {require(`./handler/${handler}`)(client)});

client.login(config.token);