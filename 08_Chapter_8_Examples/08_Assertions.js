
// Assertions are a tool to do basic sanity checking for programmer errors. Consider this helper function, assert:


function AssertionFailed(message){

    this.message = message;
}

AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message){
    if(!test)
    throw new AssertionFailed(message);
}

function lastElement(array){

    assert(array.length > 0 , "empty array in lastElement");
    return array[array.length - 1];
}