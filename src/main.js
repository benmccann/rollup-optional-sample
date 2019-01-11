var moment = require("moment");

var momentAvailable = !!moment;

console.log('Is moment available? ' + momentAvailable);

if (momentAvailable) {
	console.log('main loaded with moment at ' + +moment());	
}

module.exports = moment;
