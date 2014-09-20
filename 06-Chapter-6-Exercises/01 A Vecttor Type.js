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

Vector.prototype.plus = function(vector){

    console.log("Vector{x:", (vector.x )+ ", y: " + vector.y + "}");
};

Vector.prototype.minus = function(vector){

};

Object.defineProperty(Vector.prototype, "length", {
    get: function(){ return Math.sqrt((this.x*this.x)+(this.y*this.y));}
});

//Vector.prototype.length();


//console.log(new Vector(1,2), new Vector(2,3));

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
//console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5