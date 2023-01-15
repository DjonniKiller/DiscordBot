const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	transferCommand: new SlashCommandBuilder()
		.setName('transfer')
		.setDescription('Переместить пользователя в другой канал')
		.addUserOption(option =>
			option
				.setName('user')
				.setDescription('Пользователь')
				.setRequired(true))
		.addChannelOption(option =>
			option
				.setName('channel')
				.setDescription('Канал')
				.setRequired(true))
		.toJSON()
}