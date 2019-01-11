var luxon = require("luxon");

var luxonAvailable = !!luxon;
var DateTime = luxon ? luxon.DateTime : undefined;

console.log('Is luxon available? ' + luxonAvailable);

if (DateTime) {
	console.log('main loaded with luxon at ' + DateTime.local());	
}

module.exports = DateTime;
