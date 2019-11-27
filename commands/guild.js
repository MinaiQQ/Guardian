const Discord = require('discord.js')

module.exports = {
    name: 'guild',
    description: 'Get info on the server.',
    execute(message) {
            console.log("embedding")
           
            
            const embed = new Discord.RichEmbed()
            .setTitle("Guild Info")
            .setColor(0x00AE86)
            .setFooter("Guardian, phantomdev-github/Guardian", "https://raw.githubusercontent.com/phantomdev-github/Resources/master/images/Bots/Guardian/avatar.png")
            .setTimestamp()
            .setURL("https://www.github.com/phantomdev-github/Guardian")
            .addField("Server Name",
            (`${message.guild.name}`))
            .addField("Total Members",
            (`${message.guild.memberCount}`))
    message.channel.send({embed});
}};