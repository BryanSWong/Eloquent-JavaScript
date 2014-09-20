/*

 JavaScript gives us functions, JSON.stringify and JSON.parse,
 that convert data from and to this format. The first takes a
 JavaScript value, and returns a JSON-encoded string. The second
 takes such a string, and converts it to the value it encodes.

 */


var string = JSON.stringify({name: "X", born: 1980});

console.log(string); // → {"name":"X","born":1980}

console.log(JSON.parse(string).born); // → 1980