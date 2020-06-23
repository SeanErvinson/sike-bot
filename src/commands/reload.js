module.exports = {
    name: 'reload',
    description: 'Reload a new command',
    args: true,
    usage: '<command>',
    execute(message, args) {
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName);
        if (!command) return message.reply(`There is no command named \`${commandName}\`.`);
        delete require.cache[require.resolve(`./${command.name}.js`)];
        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${command.name}\` was reloaded!`);
        } catch (error) {
            console.log(error);
            message.channel.send(
                `There was an error while reloading \`${command.name}\`:\n\`${error.message}\`.`,
            );
        }
    },
};
