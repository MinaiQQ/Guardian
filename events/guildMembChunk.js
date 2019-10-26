module.exports = {
    name: 'guildMemberRemove',
    description: 'fires whenever a new user joins the guild.',
    execute:function(client) {
		client.on("guildMemberChumk", (guild, member) => {
			
			console.log(`a chunk of guild members is received`);
			});
}};