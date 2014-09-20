/*
 Developer: Bryan Wong

 Date: 09-03-2014

 Description:

 Every and then some

 Arrays also come with the standard methods every and some. Both take a predicate function that,
 when called with an array element as argument, returns true or false. Just like && only returns a
 true value when the expressions on both sides are true, every only returns true when the predicate
 returned true for all elements of the array. Similarly, some returns true as soon as the predicate
 returned true for any of the elements. They do not process more elements than necessary—for example,
 if some finds that the predicate holds for the first element of the array, it will not look at the
 values after that.

 Write two functions, every and some, that behave like these methods, except that they take the
 array as their first argument, rather than being a method.

 // Your code here.

 console.log(every([NaN, NaN, NaN], isNaN));
 // → true
 console.log(every([NaN, NaN, 4], isNaN));
 // → false
 console.log(some([NaN, 3, 4], isNaN));
 // → true
 console.log(some([2, 3, 4], isNaN));
 // → false
 */

function every(arr, pred){

    for(var i = 0; i < arr.length; i++){

        if(pred(arr[i]) != true){

            return false;
        }
    }
    return true;
}

function some(arr, pred){

    for( var j = 0; j < arr.length; j++){

        if(pred(arr[j]) != false){

            return true;
        }
    }
    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false