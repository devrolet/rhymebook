console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// Check to see if variable is a string
// console.log(_.isString(true));
// console.log(_.isString('Chet'));

var filteredArray = _.uniq(['Chet', 5, 'Chet', 1, 2, 3, 4]);
console.log(filteredArray);



// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

// console.log('Result: ', notes.add(42, 39));