/** @format */

import { ICommand } from 'wokcommands';

export default {
	category: 'General',
	description: 'Sends your timezone',
	slash: true,
    guildOnly: true,
	callback: ({}) => {
		return {
			content: `${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
			ephemeral: true,
		};
	},
} as ICommand;
