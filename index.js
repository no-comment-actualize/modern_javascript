var moment = require('moment');
var math = require('mathjs');

console.log("hello from js!");

var relativeDay = moment().startOf('day').fromNow();
console.log(relativeDay);

console.log(math.sqrt(-4));