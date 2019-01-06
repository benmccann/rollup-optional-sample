import { DateTime } from "luxon";

var luxonAvailable = false;
try {
	luxonAvailable = !!DateTime;
} catch (err) {
}

console.log('Is luxon available? ' + luxonAvailable);
