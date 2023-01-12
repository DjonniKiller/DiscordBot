const { REST, Routes, Client, GatewayIntentBits } = require('discord.js');
const { commands } = require('./commands/commands');
const { ready, interactionCreate } = require('./api/on_commands/on_commands');
require('dotenv').config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.APP_ID;

const client = new Client({intents: 
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})
  
const rest = new REST({ version: '10' }).setToken(TOKEN);

client.on('ready', ready);

client.on('interactionCreate', interactionCreate);

(async () => {
    try {
      console.log('Started refreshing application (/) commands.');
  
      await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();

client.login(TOKEN);