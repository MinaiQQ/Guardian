module.exports = {
    name: 'ready',
    description: 'client on ready event.',
    execute:function(client) {
        client.on("ready", () => {
           client.user.setActivity(`g!help | ${client.guilds.size} servers`, {
           type: "STREAMING",
           url: "https://www.twitch.tv/hero_nimbi"
});            console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
		})
}};