module.exports = {
    ready() {console.log(`Bot has logged in!`);},

    interactionCreate(interaction){
        if(interaction.isChatInputCommand()){
            interaction.reply({content: `Fuck you, ${interaction.options.get('user').value}`});  
        }
    }
}