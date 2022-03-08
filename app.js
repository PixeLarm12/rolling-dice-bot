const dotenv = require('dotenv');

if(process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

const { BOT_TOKEN } = process.env;
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(BOT_TOKEN);

client.on('ready', () => {
	console.log("I'm ready, let's roll some dices!");
});

client.on('message', async message => {
	if (message.content.startsWith('!roll')) {
		let whatToRoll = String(message).split("!roll").pop();
		let dice = whatToRoll.split("d");

		const dicesQtd = dice[0];
		const diceType = dice[1];

		for(let i = 1; i <= parseInt(dicesQtd); i++) {
			message.channel.send(`***[${i}] => [${Math.floor(Math.random() * parseInt(diceType)) + 1}]***`);
		}
	}
});
