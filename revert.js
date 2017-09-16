// Just a script for reverting the text back to uppercase...

const fs = require('fs');
const file = "./file";

var func = function(file) {
	return new Promise(function(resolve, reject) {
		fs.readFile(file, "utf8", function(error, data) {
			if (error) reject(error);
			else resolve(data);
		});
	});
};

func(file)
	.then(data => fs.writeFile(file, data.toUpperCase(), (err) => { if (err) console.error(err) }))
    .catch(err => console.error(err));
