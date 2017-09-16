const fs = require('./promises.js');
const file = './file';

async function readAsync(file) {
    let data = await fs.read(file);
    fs.writeFile(file, data.toLowerCase(), err => { if (err) console.error(err) });
}

readAsync(file);
