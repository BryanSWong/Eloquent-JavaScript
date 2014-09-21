/*

 Developer: Bryan Wong

 Date: 09-17-2014

 Description:

 A vector type

 Write a constructor Vector that represents a vector in two-dimensional
 space. It takes x and y parameters (numbers), which it should save to
 properties of the same name.

 Give the Vector prototype two methods, plus and minus, that take another
 vector as a parameter and return a new vector that has the sum or
 difference of the two vectors’ (the one in this and the parameter) x
 and y values.

 Add a getter property length to the prototype that computes the length
 of the vector—that is, the distance of the point (x, y) from the
 origin (0, 0).

 console.log(new Vector(1, 2).plus(new Vector(2, 3)));
 // → Vector{x: 3, y: 5}
 console.log(new Vector(1, 2).minus(new Vector(2, 3)));
 // → Vector{x: -1, y: -1}
 console.log(new Vector(3, 4).length);
 // → 5

 */

function Vector(x,y){
    this.x = x;
    this.y = y;
}
// the Vector plus method
Vector.prototype.plus = function(vector){

    vector.x = this.x + vector.x; // adds the x values together.
    vector.y = this.y + vector.y; // adds the y values together.

    return "Vector{x: " + vector.x + ", y: "+ vector.y + "}";
};

// the Vector minus method
Vector.prototype.minus = function(vector){

    vector.x = this.x - vector.x; // subtracts the x value from the function vector.x.
    vector.y = this.y - vector.y; // subtracts the y values from the function vector.y.

    return "Vector{x: " + vector.x + ", y: "+ vector.y + "}";
};

// the Vector getter property "length"
Object.defineProperty(Vector.prototype, "length", {
    // computes the distance from (0, 0) to (x, y) using Pythagorean theorem.
    get: function(){ return Math.sqrt((this.x * this.x)+(this.y * this.y));}
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5