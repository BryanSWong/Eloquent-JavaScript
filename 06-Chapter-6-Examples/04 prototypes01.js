/*

Prototypes

 */

var empty = {};

console.log(empty.toString);
// → function toString(){…}

console.log();

console.log(empty.toString());

// → [object Object]

console.log();

/*

 So who is the prototype of that empty object? It is the
 great ancestral prototype, the entity behind almost all
 objects, Object.prototype.

 */

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true

console.log();


console.log(Object.getPrototypeOf(Object.prototype));
// → null


console.log();
/*

 Many objects don’t directly have Object.prototype as their
 prototype, but instead have another object, which provides
 its own default properties. Functions derive from Function.prototype,
 and arrays derive from Array.prototype.

 */


console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// true

console.log();

console.log(Object.getPrototypeOf([]) == Array.prototype);

// true

