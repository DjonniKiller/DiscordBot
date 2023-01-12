const { SlashCommandBuilder } = require('discord.js');

module.exports.fuckyouCommand = new SlashCommandBuilder()
    .setName('fuckyou')
    .setDescription('For someone, who wanna be fucked')
    .addStringOption((option) => 
        option
            .setName('user')
            .setDescription('Fucked person')
            .setRequired(true)
            .setChoices(
                {
                    name: 'Цыган',
                    value: '@Мать',
                }
            )
    ).toJSON();