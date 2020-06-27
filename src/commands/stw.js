module.exports = {
    name: 'stw',
    args: true,
    description: 'Spin the wheel',
    usage: '<value> <value> ... <value>',
    execute(message, args) {
        randomNum = Math.floor(Math.random() * args.length);
        entries = args;
        message.channel.send('Spinning the wheel');
        message.channel.send(`The wheel has spoken: ${entries[randomNum]}`);
    },
};
