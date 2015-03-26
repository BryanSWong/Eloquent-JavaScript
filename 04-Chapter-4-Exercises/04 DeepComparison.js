/*
 Developer: Bryan Wong

 Date: 08-01-2014

 Description:

 Deep comparison

 The == operator compares objects by identity. But sometimes, you would prefer to compare the values of
 their actual properties.

 Write a function, deepEqual, that takes two values and returns true only if they are the same value or are
 objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

 To find out whether to compare two things by identity (use the === operator for that) or by looking at their
 properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep
 comparison. But you have to take one silly exception into account: by a historical accident, typeof null
 also produces "object".



 */



function deepEqual(objOrVal1, objOrVal2){

    if(typeof objOrVal1 == "object" && typeof objOrVal2 == "object"){

        for(var prop in objOrVal1){

            if(objOrVal1[prop].toString == objOrVal2[prop].toString){
                return true;
            }
            else{
                return false;
            }

        }

    }
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));// → true
console.log(deepEqual(obj, {here: 1, object: 2}));// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));// → true

/*
now u will be working inside the if condition..the if part...
    u got the perfect code now...
now work at it..
let me give u couple of hints...

u need to use recursion...call the deepEqual inside to compare the properties
(when u call it deepEqual, it will go to the else part where u compare the values)

second hint... 04:00:38 PM

use a for loop to loop through all properties..

third hint... 04:00:56 PM

when u call deepEqual..use it like this...deepEqual(objOrVal1[prop], objOrVal2[prop])
where prop is obviously the variable used in for in loop

    */