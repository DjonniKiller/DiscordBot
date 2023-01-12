const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	usersCommand: new SlashCommandBuilder()
		.setName('users')
		.setDescription('users cmd')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('user')
				.setRequired(true))
		.toJSON(),
	async execute(interaction) {
		console.log(interaction.option.get('user').name);
	}
}