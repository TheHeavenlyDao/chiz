const fs = require('fs');
const file = "./file";

// Method 1: callbacks

/* fs.readFile(file, "utf8", function(err, data) {
    if (err) console.error(err);
    else fs.writeFile(file, data.toLowerCase(), err => { if (err) console.error(err) });
}); */

// Method 2: promises
// THIS FIRST PART BELOW IS NECESSARY FOR THE ASYNC METHOD TO WORK, UNCOMMENT IF YOU WANT TO TEST IT

/* function read(file) {
	return new Promise(function(resolve, reject) {
		fs.readFile(file, "utf8", function(error, data) {
			if (error) reject(error);
			else resolve(data);
		});
	});
}; */

/* read(file)
	.then(data => {
		fs.writeFile(file, data.toLowerCase(), (err) => { if (err) console.error(err) });
	})
    .catch(err => console.error(err));
*/

// Method 3: async/await

/* async function readAsync(file) {
    let data = await fs.read(file);
    fs.writeFile(file, data.toLowerCase(), err => { if (err) console.error(err) });
}

readAsync(file); */
