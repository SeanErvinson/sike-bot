module.exports = {
    name: 'rickroll',
    args: false,
    description: 'The re-roll the previous entries',
    execute(message, args) {
        const path = require('path');
        const location = path.join(__dirname, '..', 'assets', 'wheel.json');
        const spin = require('../utils/spin');
        const file = require('../utils/file');
        const prettyPrint = require('../utils/prettyprint');

        const data = file.load(location);
        const jsonData = JSON.parse(data);
        const entries = jsonData['entries'];

        if (entries.length > 0) {
            const response = prettyPrint.format(entries);
            message.channel.send(`Re-rolling \n${response}`);
            spin.spin(message, entries);
        } else {
            message.reply('No previous wheel. Use `!stw` to start a new wheel.');
        }
    },
};
