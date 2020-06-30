module.exports = {
    name: 'stw',
    args: true,
    description: 'Spin the wheel',
    usage: '<value> <value> ... <value>',
    execute(message, args) {
        const prettyPrint = require('../utils/prettyprint');
        const entryPeriod = 15;
        entries = args;
        let response = prettyPrint.format(entries);

        message.channel.send(`Current entries\n${response}`);
        message.channel.send(
            `You can add by typing !et <value>. It will start in ${entryPeriod} seconds.`,
        );

        const filter = (m) => m.content.startsWith('!et');
        message.channel
            .awaitMessages(filter, { time: entryPeriod * 1000, errors: ['time'] })
            .then((collected) => console.log(collected))
            .catch((collected) => {
                collected.forEach((command) => {
                    const entry = command.content.split(/ +/);
                    entries.push(entry[1]);
                });
                randomNum = Math.floor(Math.random() * entries.length);
                response = prettyPrint.format(entries);
                message.channel.send(`Final entries\n${response}`);
                message.channel.send('Spinning the wheel');
                let count = 3;
                const counter = setInterval(() => {
                    if (count <= 0) {
                        message.channel.send(`The wheel has spoken: ${entries[randomNum]}`);
                        clearInterval(counter);
                    } else {
                        message.channel.send(`${count}`);
                    }
                    count--;
                }, 1000);
            });
    },
};
