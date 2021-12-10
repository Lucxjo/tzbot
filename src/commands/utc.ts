/** @format */

import moment from 'moment';
import { ICommand } from 'wokcommands';
import { Constants } from 'discord.js';

export default {
	category: 'General',
	description: 'Sends the time at UTC',
	slash: true,
	guildOnly: true,
	minArgs: 1,
	expectedArgs: '<time_only>',
	options: [
		{
			name: 'time_only',
			description: 'Would you like to see the time only?',
			type: Constants.ApplicationCommandOptionTypes.BOOLEAN,
		},
	],
	callback: ({ args }) => {
        const time_only = args[0];
        if (time_only) {
            return { content: moment().utc().format('HH:mm:ss'), ephemeral: true };
        } else {
            return { content: moment().utc().format('YYYY-MM-DD, HH:mm:ss'), ephemeral: true };
        }
	},
} as ICommand;
