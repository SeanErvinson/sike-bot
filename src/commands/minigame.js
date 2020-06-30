module.exports = {
    name: 'minigame',
    description: 'List of minigames',
    args: false,
    execute(message, args) {
        const fs = require('fs');
        const path = require('path');
        const location = path.join(__dirname, '..', 'assets', 'minigames.json');
        const data = fs.readFileSync(location);
        const jsonData = JSON.parse(data);

        let response = '';
        jsonData['games'].forEach(
            (game) => (response += `[${game.name}](${game.url}) - ${game.description}\n`),
        );
        const embedMessage = {
            title: 'Minigame library',
            description: response,
            color: 9180426,
        };
        message.channel.send({ embed: embedMessage });
    },
};
