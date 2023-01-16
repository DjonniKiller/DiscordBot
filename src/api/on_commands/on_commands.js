function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
	ready() { console.log(`Bot has logged in!`); },

	async interactionCreate(interaction) {
		if (interaction.isChatInputCommand()) {
			if (interaction.commandName === 'transfer') {
				member = interaction.options.getMember('user');
				transfchannel = interaction.options.get('channel').value;
				currChannel = member.voice.channelId;
				repeats = interaction.options.getInteger('repeats');

				if (!repeats) repeats = 5;

				interaction.reply({ content: `Пользователь ${member} довыебывался.` });

				for (let i = 0; i < repeats; i++) {
					await sleep(1000);
					member.voice.setChannel(transfchannel);
					member.voice.setChannel(currChannel);
				}
			}
		}
	}
}