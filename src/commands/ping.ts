/** @format */

import { ICommand } from 'wokcommands';

export default {
	category: 'Testing',
	description: 'Replies with pong.',
	slash: true,
    guildOnly: true,
	callback: ({ }) => {
        return { content: 'pong', ephemeral: true };
	},
} as ICommand;
