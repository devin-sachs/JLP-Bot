// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);

// const client = new Discord.client();
// client.on('ready', () => {
//     console.log(`LOgged in as ${client.user.tag}!`);
// });

// client.on('message', msg => {
//     if (msg.content == 'ping') {
//         msg.reply('WAT DUH... WHAT A MESS');
//     }
// });

// client.login(process.env.TOKEN);