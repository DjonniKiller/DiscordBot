module.exports = {
	ready() { console.log(`Bot has logged in!`); },

	interactionCreate(interaction) {
		if (interaction.isChatInputCommand()) {
			if (interaction.commandName === 'transfer') {
				member = interaction.options.getMember('user');
				transfchannel = interaction.options.get('channel').value;
				currChannel = member.voice.channelId;

				for (let i = 0; i < repeats ?? 10; i++) {
					member.voice.setChannel(tranfchannel);
					member.voice.setChannel(currChannel);
				}

				interaction.reply({ content: `Пользователь ${member} довыебывался.` });
			}
		}
	}
}