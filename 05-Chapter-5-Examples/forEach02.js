/*
 This looks quite a lot like the classical for loop, with its body written as a block below it.
 Except that now the body is inside of the function value, as well as inside of the parentheses of
 the call to forEach. This is why it has to be closed with the closing brace and closing parenthesis.

 */


function forEach(array, action){

    for(var i = 0; i < array.length; i++){

        action(array[i]);
    }

}

var numbers = [1,2,3,4,5], sum = 0;

forEach(numbers, function(number){

    sum += number;

});

console.log(sum); // 15


