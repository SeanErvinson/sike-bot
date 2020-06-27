module.exports = {
    name: 'clear',
    args: false,
    description: 'Clear the wheel',
    execute(message, args) {
        const fs = require('fs');
        const path = require('path');
        const location = path.join(__dirname, '..', 'assets', 'wheel.json');
        if (fs.existsSync(location)) {
            const jsonData = fs.readFileSync(location);
            data = JSON.parse(jsonData);
            data['entries'] = [];
            fs.writeFileSync(location, JSON.stringify(data));
            message.channel.send('Wheel has been cleared.');
        } else {
            message.channel.send(
                'No active wheel. Enter an entry using the `!entry` command first.',
            );
        }
    },
};
