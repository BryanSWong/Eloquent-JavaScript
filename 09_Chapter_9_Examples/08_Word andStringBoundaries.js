//  A word boundary can be the start or end of the string or any point in the
// string that has a word character (as in \w) on one side and a nonword
// character on the other.

console.log(/cat/.test("concatenate"));
// true
console.log();
console.log(/\bcat\b/.test("concatenate"));
// false