/*
 When you put a plus sign (+) after something in a regular expression, it indicates that the
 element may be repeated more than once. Thus, /\d+/ matches one or more digit characters.
 */

console.log(/'\d+'/.test("'123'"));
console.log();
console.log(/'\d+'/.test("''"));
console.log();
console.log(/'\d*'/.test("'123'"));
console.log();
console.log(/'\d*'/.test("''"));
console.log();


/*
 A question mark makes a part of a pattern “optional”, meaning it may occur zero or
 one time. In the following example, the u character is allowed to occur, but the
 pattern also matches when it is missing.
 */

var neighbor = /neighbou?r/;

console.log(neighbor.test("neighbour"));
console.log();
console.log(neighbor.test("neighbor"));
console.log();

/*
 Here is another version of the date and time pattern that allows both single- and
 double-digit days, months, and hours. It is also slightly more readable.
 */

var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(dateTime.test("30-1-2003 8:45"));