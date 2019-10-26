module.exports = {
    name: 'ready',
    description: 'client on ready event.',
    execute:function(client) {
        client.on("ready", () => {
            client.user.setActivity(`on ${client.guilds.size} servers`);
            console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
		})
}};