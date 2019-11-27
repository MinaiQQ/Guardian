module.exports = {
    name: 'ready',
    description: 'client on ready event.',
    execute:function(client) {
        client.on("ready", () => {
            client.user.setActivity(`g!help on ${client.guilds.size} servers`, { type: 'LISTENING' });
            console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
		})
}};