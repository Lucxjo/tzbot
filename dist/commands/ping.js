"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Testing',
    description: 'Replies with pong.',
    slash: true,
    guildOnly: true,
    callback: ({}) => {
        return { content: 'pong', ephemeral: true };
    },
};
