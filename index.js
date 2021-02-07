const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  

client.on('message',message =>{
      if(message.author.bot) return;
      
      if(message.channel.type == dm) return;
  });

client.on("guildMemberAdd", member => {
    client.channels.cache.get('728707419068301362').send(`Bienvenue à   sur Life House ${member}  `);
    member.roles.add('736764303901851650')

})

client.login(process.env.Token);
