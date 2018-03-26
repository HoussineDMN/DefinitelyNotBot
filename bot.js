const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame("??help")
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
if (message.content === '??help') {
              var embed  = new Discord.RichEmbed()
                .addField("**NEED SUPPORT**" ,":wrench: SUPPORT AND COMMENDS :wrench: ")
                .addField("broadcast (bc)" ,"**using:** ``??broadcast <message> , ??bc <message>``")
                .addField("**BAN**" ,"**using:** ``??ban <someone>``")
                .addField("**KICK**" ,"**using:** ``??kick <someone> ``")
                .addField("**ِAVATAR**" ,"**using:** ``??avatar``")
                .addField("**INFO**", "**using :** ``??info``")
                .addField("**SAY**" ,"**using:** ``??say <message>``")
                .addField("**ID**" ,"**using��:** ``??id``")
                .addField("**SERVER**" ,"**using:** ``??server``")
                .addField("**INVITE**" ,"**using:** ``??invite <لfor invite bot to servers>``")
                .addField("**SUPPORT**" ,"**using:** ``??suppport <support>``")
                .addField("**QA**" ,"**using:** ``??qa <asking>``  ")
                .addField("**CLEAR**" ,"**using:** ``??clear <cleaning chat>``")
                .addField("**PING**", "**using:** ``??ping``")
                .addField("**SERVERNAME**", "**using:** ``??servername``")
                .addField("**CUT_TWEET**", "**using** ``??ct``")
                .addField("**TWEET**", "**using** ``??tweet <message>``")
                .addField("**NO INVITE LINKE**","It's not working now but we gonna fix it later ")
                .addField("**LOGIN**" , " It's not working now but we gonna fix it later ")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
  if(message.content === ('clear')) {
  let modRole = message.guild.roles.find("name", "Admin");
  if (!modRole) return message.reply('You do not have Admin Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(` https://discord.gg/a8Xe9q8 ! `)
    }
});
client.on('message', msg => {
  if (msg.content === '??invite') {
    msg.reply('https://discordapp.com/oauth2/authorize?client_id=427502556059795468&scope=bot&permissions=8');
  }
});
client.on('message', msg => {
  if (msg.content === '??help') {
    msg.reply(':envelope: | Check your DMs');
  }
});
client.on("message", message => {
    var prefix = "??";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **u dont have permessions**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done",
        color: 0x06DF00,
        description: "Cleaned Succesfully",
        footer: {
          text: "Name Bot."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
// Your Avatar URL!
client.on('message', message => {
    if (message.content === "??Avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on('message', msg => {
  if (msg.content === '??support') {
    msg.reply('https://discord.gg/a8Xe9q8');
  }
});
client.on("message", message => {
      if (message.content === "??ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
    client.on('message', message => {
     if (message.content === "??id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("Info about your acc")
               .setFooter(`RCP ServerBOT`, '')
  .setColor("#9B59B6")
  .addField("Name Acc", `${message.author.username}`)
  .addField('Your Code', message.author.discriminator)
  .addField("ID Personel", message.author.id)
  .addField('BOT', message.author.bot)
  .addField("Date Join", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
var prefix = "??";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});
client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' Bye ..',
}}).catch(console.error);
  }
);
client.on("message", (message) => {
    if (message.content.startsWith("??ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ You Dont have permessions');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " Banned Succesfully :wave: ");
        }).catch(() => {
            message.channel.send(":x: Something wrong Try again:x: ");
        });
    }
});
client.login("NDI3NTAyNTU2MDU5Nzk1NDY4.DZq1pw.kBkmvlFdrREOIqZmCTiHBMz2EYw");

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
