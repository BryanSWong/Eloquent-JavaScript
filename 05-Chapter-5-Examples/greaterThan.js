/*

 Higher-order functions allow us to abstract over actions,
 not just values. They come in several forms. For example,
 you can have functions that create new functions:

 */

function greaterThan(n){

    return function(m){ return m > n; };

}

var greaterThan10 = greaterThan(10);

console.log(greaterThan10(11)); // true

console.log(greaterThan10(9)); // false  9 < 10

console.log(greaterThan10(10)); // false 10 !> 10 nor is it < 10