// Objects

// One way to create an object is by using a curly brace notation.

var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"]

};

console.log(day1.squirrel);

console.log(day1.wolf); // → false

day1.wolf = false; // → undefined

console.log(day1.wolf); // → false


/*

 Each property is written as a name, followed by a colon,
 followed by an expression that provides a value for the property.
 Spaces and line breaks are not significant. When an object spans
 multiple lines, indenting it like in the previous example improves
 readability. Properties whose names are not valid variable names or
 valid numbers have to be quoted.

 */


var description = {

    work : "Went to work",

    "touched a tree" : "Touched a tree"

};


/*

 The delete operator cuts off a leg from such an octopus. It is a
 unary operator that, when applied to a property access expression,
 will remove the named property from the object. This is not a common
 thing to do, but it is possible.

 */


var anObject = {left:1, right: 2};

console.log(anObject.left); // → 1

delete anObject.left;

console.log(anObject.left); // → undefined

console.log("left" in anObject); // → false

console.log("right" in anObject); // → true



// Jacques’ journal as an array of objects.


var journal = [
    {events: ["work", "touched tree", "pizza" , "running", "television"],

        squirrel: false},

    {events: ["work", "ice cream", "cauliflower",
        "lasagna", "touched tree", "brushed teeth"],

        squirrel: false },

    {events: ["weekend", "cycling", "break", "peanuts", "beer"],

        squirrel: true} //,(comma)

    /* and so on... */

];