/** @format */

import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGES,
	],
});

client.on('ready', () => {
    console.log(`Drectory: ${__dirname}`);
	const wok = new WOKCommands(client, {
		commandsDir: path.join(__dirname, 'commands'),
		typeScript: true,
	})
		.setDisplayName('TZ Bot')
		.setCategorySettings([
			{
				name: 'Testing',
				emoji: '🔬',
			},
        ]);
    
    const { slashCommands } = wok;
});

client.login(process.env.DJS_TOKEN);
