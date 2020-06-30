module.exports = {
    format: (elements) => {
        let result = '```';
        if (elements.length > 0) {
            result += 'css';
            elements.forEach((element) => (result += `\n${element}`));
        }
        result += '\n```';
        return result;
    },
};
