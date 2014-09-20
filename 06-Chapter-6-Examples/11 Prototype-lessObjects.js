/*

 What if someone registered the name hasOwnProperty in
 our map object and set it to the value 42? Now the call
 to map.hasOwnProperty will try to call the local property,
 which holds a number, not a function.

 In such a case, prototypes just get in the way, and we
 would actually prefer to have objects without prototypes.
 We saw the Object.create function, which allows us to create
 an object with a specific prototype. You are allowed to pass
 null as the prototype to create a fresh object with no prototype.
 For objects like map, where the properties could be anything,
 this is exactly what we want.

 */


var map = Object.create(null);

map["pizza"] = 0.069;

console.log("toString" in map);
// false
console.log();
console.log("pizza" in map);
// true

