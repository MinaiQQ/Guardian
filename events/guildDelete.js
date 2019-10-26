module.exports = {
    name: 'guildDelete',
    description: 'Guild leave event.',
    execute:function(client) {
		client.on("guildDelete", (guild) => {
			
			console.log(client.user.username + " has left " + guild.name);
			});
}};