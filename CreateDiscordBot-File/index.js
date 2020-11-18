const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzc2MDk0NDIyODYwMzAwMzI4.X6v4QQ.eJLPMhq-gVCy_VPgjUf2KvYR8nk';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);