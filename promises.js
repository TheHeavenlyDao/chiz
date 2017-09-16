const fs = require('fs');
const file = "./file";

// you can skip creating the promise if it already exists
// #Begin
var read = function(file) {
	return new Promise(function(resolve, reject) {
		fs.readFile(file, "utf8", function(error, data) {
			if (error) reject(error);
			else resolve(data);
		});
	});
};
// #End

read(file)
.then(data => {
    fs.writeFile(file, data.toLowerCase(), (err) => { if (err) console.error(err) });
})
.catch(err => console.error(err));

// emulating a fs module that returns promises by default
module.exports = {
    read: read,
    writeFile: fs.writeFile
};
