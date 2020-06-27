module.exports = {
    name: 'spin',
    args: false,
    description: 'Spin the wheel',
    execute(message, args) {
        const fs = require('fs');
        const path = require('path');
        const location = path.join(__dirname, '..', 'assets', 'wheel.json');
        if (fs.existsSync(location)) {
            jsonData = JSON.parse(fs.readFileSync(location));
            randomNum = Math.floor(Math.random() * jsonData['entries'].length);
            entries = jsonData['entries'];
            message.channel.send('Spinning the wheel');
            message.channel.send(`The wheel has spoken: ${entries[randomNum]}`);
        } else {
            message.channel.send(
                'No active wheel. Enter an entry using the `!entry` command first.',
            );
        }
    },
};
