// ways to write regular expressions

var re1 = new RegExp("abc");
var re2 = /abc/;

console.log(re1);
console.log(re2);

/*
 Some characters, such as question marks and plus signs, have special meanings in
 regular expressions and must be preceded by a backslash if they are meant to
 represent the character itself.
 */

var eighteenPlus = /eighteen\+/;

console.log(eighteenPlus);