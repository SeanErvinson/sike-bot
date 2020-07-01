module.exports = {
    name: 'status',
    args: false,
    description: 'The status of the wheel',
    execute(message, args) {
        const fs = require('fs');
        const path = require('path');
        const location = path.join(__dirname, '..', 'assets', 'wheel.json');
        if (fs.existsSync(location)) {
            const jsonData = JSON.parse(fs.readFileSync(location));
            let response = '```';
            entries = jsonData['entries'];
            if (entries.length > 0) {
                response += 'css';
                entries.forEach((entry) => (response += `\n${entry}`));
            }
            response += '\n```';
            message.channel.send(`Current entries\n${response}`);
        } else {
            message.channel.send('No active wheel. Enter an entry using the `!entry` command first.');
        }
    },
};
