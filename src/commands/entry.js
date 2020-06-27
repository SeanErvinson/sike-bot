module.exports = {
    name: 'entry',
    args: true,
    usage: '<entry>',
    description: 'Add an entry to the wheel',
    execute(message, args) {
        const fs = require('fs');
        const path = require('path');
        const location = path.join(__dirname, '..', 'assets', 'wheel.json');
        entry = args[0];
        if (fs.existsSync(location)) {
            const jsonData = fs.readFileSync(location);
            data = JSON.parse(jsonData);
            data['entries'].push(entry);
            fs.writeFileSync(location, JSON.stringify(data));
        } else {
            data = {
                entries: [entry],
            };
            fs.writeFileSync(location, JSON.stringify(data));
        }
        message.channel.send(`\`${entry}\` has been added.`);
    },
};
