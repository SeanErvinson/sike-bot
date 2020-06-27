require('dotenv').config();
const fs = require('fs');
const prefix = process.env.COMMAND_PREFIX;
const Discord = require('discord.js');

const commands = fs.readdirSync('./src/commands').filter((file) => file.endsWith('.js'));
const client = new Discord.Client();
client.commands = new Discord.Collection();

for (const file of commands) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    if (!args.length && command.args) {
        let response = 'This command requires arguemnts to work.';
        if (command.usage) {
            response += `\nTo use the command ${prefix}${commandName} ${command.usage}`;
        }
        return message.channel.send(response);
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Uh oh. sIKe bOT GlICh1ng bEeeP BoOp. cAlL eRVVVvvvv....Sike bot has dieded');
    }
});

client.login(process.env.BOT_TOKEN);
