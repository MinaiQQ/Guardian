module.exports = {
    name: 'guildMemberRemove',
    description: 'fires whenever a new user joins the guild.',
    execute:function(client) {
		client.on("guildMemberRemove", (guild, member) => {
			
			console.log(`a member leaves a guild, or is kicked: ${member.tag}`);
			});
}};