/*

 Developer: Bryan Wong

 Date: 09-01-2014

 Description:

 Flattening

 Use the reduce method in combination with the concat method to “flatten”
 an array of arrays into a single array that has all the elements of the
 input arrays.

 */

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a,b){return a.concat(b)}));

 // → [1, 2, 3, 4, 5, 6]