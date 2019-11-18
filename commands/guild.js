const Discord = require('discord.js')

module.exports = {
    name: 'guild',
    description: 'Get info on the server.',
    execute(message) {
            console.log("embedding")
           
            
            const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setFooter("Guardian, phantomdev-github/Guardian", "https://raw.githubusercontent.com/phantomdev-github/Resources/master/images/Bots/Guardian/avatar.png")
            .setImage("https://raw.githubusercontent.com/phantomdev-github/Resources/master/images/Branding/banner.png")
            .setThumbnail("https://raw.githubusercontent.com/phantomdev-github/Resources/master/images/Branding/avatar.png")
            .setTimestamp()
            .setURL("https://www.github.com/phantomdev-github/Guardian")
            .addField("Guild Info",
            (`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`))
    message.channel.send({embed});
}};