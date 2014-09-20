/*

 Developer: Bryan Wong

 Date: 07-10-2014

 Description: Write a function min that takes two arguments and returns their minimum.

 examples:
 console.log(min(0, 10));
 // → 0
 console.log(min(0, -10));
 // → -10

 */


function min(a,b){
    if( a> b){
        return b;
    }

    else{
        return a;
    }

}

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(55, 34));