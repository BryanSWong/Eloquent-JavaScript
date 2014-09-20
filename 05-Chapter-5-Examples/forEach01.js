/*

 Since “doing something” can be represented as a function, and functions are just values,
 we can pass our action as a function value:

 */


function forEach(array, action){

    for(var i=0; i<array.length; i++){

        action(array[i]);

    }

}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);