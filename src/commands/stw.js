module.exports = {
    name: 'stw',
    args: true,
    description: 'Spin the wheel',
    usage: '<value> <value> ... <value>',
    execute(message, args) {
        const prettyPrint = require('../utils/prettyprint');
        const spin = require('../utils/spin');
        const file = require('../utils/file');
        const path = require('path');

        const location = path.join(__dirname, '..', 'assets', 'wheel.json');
        const entryPeriod = 15;

        entries = args;
        let response = prettyPrint.format(entries);

        message.channel.send(`Current entries\n${response}`);
        message.channel.send(
            `You can add by typing !et <value>. It will start in ${entryPeriod} seconds.`,
        );

        const filter = (m) => m.content.startsWith('!et');
        const collector = message.channel.createMessageCollector(filter, { time: 15000 });
        collector.on('collect', (m) => {
            entry = m.content.split(/ +/);
            message.channel.send(`\`${entry[1]}\` has been added`);
        });
        message.channel
            .awaitMessages(filter, { time: entryPeriod * 1000, errors: ['time'] })
            .then((collected) => console.log(collected.first()))
            .catch((collected) => {
                collected.forEach((command) => {
                    const entry = command.content.split(/ +/);
                    entries.push(entry[1]);
                });
                data = {
                    entries: entries,
                };
                file.save(location, data);
                randomNum = Math.floor(Math.random() * entries.length);
                response = prettyPrint.format(entries);
                message.channel.send(`Final entries\n${response}`);
                spin.spin(message, entries);
            });
    },
};
