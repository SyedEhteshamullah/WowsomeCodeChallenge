# WowsomeCodeChallenge
A program that takes 3 arguments (Roman Numerals and arithmetic operators + - * / ) and give the results in Roman numerals. 
Should have unit test cases for the program using any framework.

Importing(via requrie keyword) the Index file of this solution provides an object with function calc in it that takes three arguments as below.

var rmath = require('./index');// Importing the index file
rmath.calc('XXX','+','X'); // First and third argument are roman numerals with operator as the second argument.
// returns XL as output

To run the unit test cases of this solution.
1. Open command prompt in the directory containing package.json file of this solution
2. Install mocha and should libraries with npm install
3. Run the test cases with npm test
