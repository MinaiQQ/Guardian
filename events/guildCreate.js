module.exports = {
    name: 'guildCreate',
    description: 'Guild join event.',
    execute:function(client) {
		client.on("guildCreate", (guild) => {
			
			console.log(client.user.username + " was invited to and joined " + guild.name);
			});
}};