module.exports = {
    name: 'guildMemberAdd',
    description: 'New user join event.',
    execute:function(client) {
		client.on("guildMemberAdd", (guild, member) => {
			member.send(
			`Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun 😀`
			)
			
			console.log(member.user.username + " joined " + guild.name);
			});
}};