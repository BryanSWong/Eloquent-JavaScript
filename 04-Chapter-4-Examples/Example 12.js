// The Math object

function randomPointOnCircle(radius){

    var angle = Math.random() * 2 * Math.PI;

    return {x: radius * Math.cos(angle),

            y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966} is random so answer differs every time

/*

 The previous example uses Math.random. This is a function that
 returns a new pseudo-random number between zero (inclusive) and
 one (exclusive) every time you call it.

 */

console.log(Math.random());

console.log(Math.random());

console.log(Math.random());



/*

 If we want a whole random number instead of a fractional one,
 we can use Math.floor (which rounds down to the nearest whole
 number) on the result of Math.random.

 */


console.log(Math.floor(Math.random() * 10));

console.log(Math.ceil(Math.random() * 10));

console.log(Math.round(Math.random() * 10));