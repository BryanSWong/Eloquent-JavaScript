/*
 Say we want to match any number. In a regular expression, putting a set of characters
 between square brackets makes that part of the expression match any of the characters
 between the brackets.

 Both of the following expressions match all strings that contain a digit:
 */

console.log(/[0123456789]/.test("in 1992"));
console.log();
console.log(/[0-9]/.test("in 1992"));
console.log();

//So you could match a date and time format like 30-01-2003 15:20 with the following expression:

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));
console.log();
console.log(dateTime.test("30-jan-2003 15:20"));
console.log();

/*

 To invert a set of characters—that is, to express that you want to match
 any character except the ones in the set—you can write a caret (^) character
 after the opening bracket.

 */

var notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
console.log();
console.log(notBinary.test("1100100010200110"));