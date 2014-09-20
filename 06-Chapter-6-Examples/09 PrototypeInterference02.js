/*

 there are situations where it causes problems.
 In previous chapters, we used an object as a way
 to associate values with names by creating properties
 for the names and giving them the corresponding value
 as their value. Here’s an example from Chapter 4:

 */

var map = {};

function storePhi(event, phi){
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);


Object.prototype.nonsense = "hi";
for(var name in map)

console.log(name);


console.log();
console.log("nonsense" in map);
// true
console.log();
console.log("toString" in map);
// true

console.log();

delete Object.prototype.nonsense;