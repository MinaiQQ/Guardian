const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'List all Guardian commands.',
    execute(message) {
            console.log("embedding")
           
            
            const embed = new Discord.RichEmbed()
            .setTitle("Commands")
            .setAuthor("Nimbi#4961", "https://cdn.discordapp.com/avatars/465228604721201158/ab9a0d6e13514e5152d08d105fcbe036.png?size=2048")
            .setColor(0x00AE86)
            .setDescription("Commands for use with Guardian.")
            .setFooter("Guardian, phantomdev-github/Guardian", "https://raw.githubusercontent.com/phantomdev-github/Resources/master/images/Bots/Guardian/avatar.png")
            .setImage("https://raw.githubusercontent.com/phantomdev-github/Resources/master/images/Bots/Guardian/banner.png")
            .setThumbnail("https://raw.githubusercontent.com/phantomdev-github/Resources/master/images/Bots/Guardian/avatar.png")
            .setTimestamp()
            .setURL("https://www.github.com/phantomdev-github/Guardian")
            .addField("Prefix",
            "!!")
            .addField("Administration",
            "Kick, Ban")
            .addField("Moderation",
            "prune")
            .addField("Utility", "ping, beep", true)
            .addBlankField(true)
            .addField("Information", "guild, avatar, args-info, user-info, help", true);
    message.channel.send({embed});
}};