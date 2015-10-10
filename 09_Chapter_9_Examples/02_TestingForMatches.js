// the simplest meatod for Regular Expressions is test.
// If you pass it a string, it will return a Boolean telling
// you whether the string contains a match of the pattern in the expression.

console.log(/abc/.test("abcde"));
console.log();
console.log(/abc/.test("abxde"));
console.log();

