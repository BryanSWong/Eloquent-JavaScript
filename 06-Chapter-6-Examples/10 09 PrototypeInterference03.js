/*

 It is possible to define our own nonenumerable properties
 by using the Object.defineProperty function, which allows
 us to control the type of property we are creating.

 */

var map = {};

 function storePhi(event,phi){
    map[event] = phi;
 }

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);


Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});

for(var name in map)
console.log(name);
// pizza
//touched tree

console.log();
console.log(map.hiddenNonsense);
// hi

/*

 So now the property is there, but it won’t show up in a loop.
 That’s good. But we still have the problem with the regular in
 operator claiming that the Object.prototype properties exist in
 our object. For that, we can use the object’s hasOwnProperty method.

 */

console.log();
console.log(map.hasOwnProperty("toString"));
// false

/*

 When you are worried that someone (some other code you
 loaded into your program) might have messed with the base
 object prototype, I recommend you write your for/in loops
 like this:

 */

console.log();
for(var name in map){
    if(map.hasOwnProperty(name)){
        console.log(name);
        // ... this is an own property
    }
}
