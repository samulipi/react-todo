var moment = require('moment');

console.log(moment().format())

// JAN 1st 1970 @ 12.00am -->0
// JAN 1st 1970 @ 12.00am -->60

var now = moment();


console.log('Current timestamp', now.unix());

var timestamp = 1509388124;

var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, Y @ H:mm'));

console.log('current moment', currentMoment.format('MMMM Do, Y @ hh:mm A'));
