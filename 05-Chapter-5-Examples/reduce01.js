/*

 The higher-order operation that represents this pattern is called reduce
  (or sometimes fold). You can think of it as folding up the array, one
  element at a time. When summing numbers, you’d start with the number
  zero, and for each element, combine it with the current sum by adding
  the two.

 The parameters to the reduce function are, apart from the array,
 a combining function and a start value. This function is a little
 less straightforward than filter and map, so pay careful attention.

 */


function reduce(array, combine, start){

    var current = start;

    for(var i = 0; i < array.length; i++)

    current = combine(current, array[i]);

    return current;

}

console.log(reduce([1,2,3,4], function(a,b){

    return a + b;

}, 0)); // 10


console.log(reduce([1,2,3,4], function(a,b){

    return a + b;

}, 40)); //50