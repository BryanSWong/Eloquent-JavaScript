// Mutability

/*

 When we have two numbers, 120 and 120, we can consider them precisely
 the same number, whether or not they refer to the same physical bits.
 But with objects, there is a difference between having two references to
 the same object and having two different objects that contain the same
 properties. Consider the following code:

 */


var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2); // → true

console.log(object1 == object3); // → false

object1.value = 15;

console.log(object2.value); // → 15

console.log(object3.value); // → 10