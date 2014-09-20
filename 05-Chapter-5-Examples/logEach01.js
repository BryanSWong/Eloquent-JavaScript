/*
this is an example of abstraction for the basic iteration over an array.

 */



function logEach(array){

    for(var i=0; i < array.length; i++){
        console.log(array[i]);
    }
}

logEach([1,2,3]);