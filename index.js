import moment from 'moment';
var math = require('mathjs');

console.log("hello from js!");

var relativeDay = moment().startOf('day').fromNow();
console.log(relativeDay);

console.log(math.sqrt(-4));

var name = "Bob", time = "yesterday";
console.log(`Hello ${name}, how are you ${time}?`);
console.log("made another change");