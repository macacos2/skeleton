const Discord = require('discord.js'); // Loading up Discord API
const musicLib = require('./musicCommands');
const botCommands = require('./botCommands'); // Loading up bot functions


/* New calls a constructor defining the bot client according to the loaded 
 Discord API */

var token = '' //Bot's unique identifier as generated by Discord. Yeah take the token see if I care
const bot = new Discord.Client(); 
const command = new botCommands();
const music = new musicLib();

//setInterval(save => {command.salvarMick(bot)},1000); some wip joke function that updates roles
command.rise(bot,token);
command.vigilance(bot);
command.replies(bot);
music.radio(bot);
