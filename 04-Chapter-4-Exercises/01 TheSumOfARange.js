/*
Developer: Bryan Wong

Date: 08-01-2014

Description:

The introduction of this book alluded to the following as a nice way to
compute the sum of a range of numbers:

 console.log(sum(range(1, 10)));

 Write a range function that takes two arguments, start and end, and
 returns an array containing all the numbers from start up to (and including) end.

 Next, write a sum function that takes an array of numbers and returns
 the sum of these numbers. Run the previous program and see whether it
 does indeed return 55.

 As a bonus assignment, modify your range function to take an optional
 third argument that indicates the “step” value used to build up the array.
 If no step is given, the array elements go up by increments of one,
 corresponding to the old behavior. The function call range(1, 10, 2)
 should return [1, 3, 5, 7, 9]. Make sure it also works with negative step
 values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/


function range(start, end){

    var myArray = [];

    for(var i = start; i <= end; i++){
        myArray.push(i);
    }

    return myArray;
}

function sum(arr){

    var total =0;

    for(var i = 0; i < arr.length; i++){
        total+=arr[i];
    }

    return total;
}

function range2(start, end, step) {

    if (start < end && step == undefined) {
        step = 1;
    }

    if (start > end && step == undefined) {
        step = -1;
    }

    var myArray = [];

    if (step > 0) {


        for (var i = start; i <= end; i += step) {
            myArray.push(i);
        }

    }

    else {

        for (var j = start; j >= end; j += step) {
            myArray.push(j);
        }


    }

    return myArray;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range2(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range2(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range2(5, 2));
// → [5, 4, 3, 2]
console.log(range2(10, 2, -2));
// → [10 , 8, 6, 4 , 2]