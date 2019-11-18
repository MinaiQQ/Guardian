const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./token.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(file,command)
}

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        const eventFunction = require(`./events/${file}`);
        console.log(eventFunction)
        eventFunction.execute(client)
    });
});

client.login(token);