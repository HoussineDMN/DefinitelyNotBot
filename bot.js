const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'BOT') {
    	message.channel.send('HERE!');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('PONG! HAHAHAH MA BOI');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
  	}
});

client.on('message', message => {
    if (message.content === '??invite') {
    	message.reply('https://discordapp.com/oauth2/authorize?client_id=427502556059795468&scope=bot&permissions=8');
