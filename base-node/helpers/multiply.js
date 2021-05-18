const fs = require('fs');
const createTable = async (number, list) => {
    try {
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let output = '';
        numbers.forEach(item => {
            output += `${number} x ${item} = ${number * item}\n`;
        });

        fs.writeFile('./files/table.txt', output, (err) => {
            if (err) {
                throw err;
            }
        });

        if (list)
            console.log(output);

        return "Table created successfuly.";
    } catch (error) {
        throw error;
    }
}

module.exports = createTable;