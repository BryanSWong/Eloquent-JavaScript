/*

 Higher-order functions allow us to abstract over actions,
 not just values. They come in several forms. For example,
 you can have functions that change other functions:

 */

function noisy(f){

    return function(arg){

        console.log("Calling with", arg);

        var val = f(arg);

        console.log("Called with", arg, " - got", val);

        return val;

    };
}

noisy(Boolean)(0);

noisy(Boolean)(1);

noisy(Boolean)("hot cakes");

noisy(Boolean)(null, 2,3,4, 5,9,6,7,8);