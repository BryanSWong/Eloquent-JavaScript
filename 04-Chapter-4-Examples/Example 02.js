// Methods

var doh = "Doh";

console.log(typeof doh.toUpperCase); // →  function

console.log(doh.toUpperCase()); // →  DOH



// This example demonstrates some methods that array objects have:

var mack = [];

mack.push("Mack");

mack.push("the", "Knife");

console.log(mack); // → ["Mack", "the", "Knife"]

console.log(mack.join(" ")); // → Mack the Knife

console.log(mack.pop()); // → Knife

console.log(mack);  // → ["Mack", "the"]
