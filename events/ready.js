module.exports = {
    name: 'ready',
    description: 'client on ready event.',
    execute:function(client) {
        client.on("ready", () => {
            client.user.setActivity(`with Discord.JS | ${client.guilds.size} server`, { type: 'PLAYING' });
            console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
		})
}};