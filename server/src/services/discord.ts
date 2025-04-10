import { Client, GatewayIntentBits, Message } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`🤖 Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', (message: Message) => {
  if (message.author.bot) return;

  console.log(`💬 [${message.guild?.name}] ${message.author.tag}: ${message.content}`);
});

export const startDiscordBot = () => {
  client.login(process.env.DISCORD_BOT_TOKEN);
};