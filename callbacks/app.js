const fs = require('fs');

/* 
Standard Callback
Write a function called isEven that receives 2 parameters:
A Number
A Callback function
Determine if the number is even. If so, invoke the callback with true as an argument, otherwise, false
-----
Create an array of numbers.
Iterate the array with a for loop, each time calling the isEven function with the number and a callback
The callback should console.log() the return value from isEven()
*/

const numberArray = [0, 1, 2, 3, 4, 5, 6];

const isEven = (number, callback) => {
  callback(number % 2 === 0 ? true : false);
};

const printIsEven = (data) => {
  console.log(`Number is even: ${data}`);
};

const loopOverArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    isEven(i, printIsEven);
  }
};

loopOverArray(numberArray);

/* 
Reading a file, using an Error First Callback
Write a function called contents that receives 1 parameter:
A File Name
Using the fs module, open and read the contents of the file,converting them to text and printing the content to the console.
Print a console.error() if anything goes wrong.
You can test this by calling your function with './words.txt', which is a file that exists, and then again with the name of a file that does not exist.
*/

const contents = (fileName) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw console.error(err);
    console.log('baracuda', data.toString());
  });
};

contents('./words.txt');
