module.exports = {
    spin: (message, entries) => {
        randomNum = Math.floor(Math.random() * entries.length);
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
    },
};
