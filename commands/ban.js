module.exports = {
	name: 'ban',
	description: 'Ban the specified user from the guild.',
	execute(message) {
			const member = message.mentions.members.first()
				
			if (!member) {
				return message.reply(`Who are you trying to ban? You must mention a user.`)
					}
					
			if (!member.bannable) {
				return message.reply(`I can't ban this user. Sorry!`)
				}
				
				return member
				.ban()
				.then(() => message.reply(`${member.user.tag} was baned.`))
				.catch(error => message.reply(`Sorry, an error occured.`))
}};