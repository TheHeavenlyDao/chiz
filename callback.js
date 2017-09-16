const fs = require('fs');
const file = "./file";

fs.readFile(file, "utf8", function(err, data) {
    if (err) console.error(err);
    else fs.writeFile(file, data.toLowerCase(), err => { if (err) console.error(err) });
});
