module.exports = {
    name: 'messege',
    description: '',
    execute:function(client) {
        client.on('message',message => {
    if (!message.content.startsWith("!") || message.author.bot) return;

    const args = message.content.slice("!".length).split(/ +/);
    const command = args.shift().toLowerCase();
        if (!client.commands.has(command)) return;
        
        try {
            client.commands.get(command).execute(message, args);
            } catch (error) {
                console.error(error);
                message.reply('there was an error trying to execute that command!');
                }
})

}};