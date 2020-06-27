module.exports = {
    name: 'rickroll',
    args: false,
    description: 'The re-roll the previous entries',
    execute(message, args) {
        const fs = require('fs');
        const path = require('path');
        const location = path.join(__dirname, '..', 'assets', 'wheel.json');
        if (fs.existsSync(location)) {
            fs.readFileSync(location);
        } else {
            message.reply('No previous wheel. Execute `!status` to check wheel entries.');
        }
    },
};
