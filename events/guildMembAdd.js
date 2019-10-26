module.exports = {
    name: 'guildMemberAdd',
    description: 'New user join event.',
    execute:function(client) {
		client.on("guildMemberAdd", (guild, member) => {
			
			console.log(member.user.username + " joined " + guild.name);
			});
}};