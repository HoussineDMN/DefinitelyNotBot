const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === '??invite') {
    	message.reply('ttps://discordapp.com/oauth2/authorize?client_id=427502556059795468&scope=bot&permissions=8');
  	}
});

// THIS FOR ACTIVITY PLACE
bot.user.setActivity("??help | in " + bot.guilds.size + " servers") 

// GAME AND STREAMING
bot.user.setGame('??invite') // Here for game statues testing.

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
