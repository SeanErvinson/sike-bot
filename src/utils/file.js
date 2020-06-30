const fs = require('fs');
module.exports = {
    save(fileLocation, data) {
        if (fs.existsSync(fileLocation)) {
            fs.writeFileSync(fileLocation, JSON.stringify(data));
        }
    },
    load(fileLocation) {
        if (fs.existsSync(fileLocation)) {
            const data = fs.readFileSync(fileLocation);
            return data;
        }
    },
};
