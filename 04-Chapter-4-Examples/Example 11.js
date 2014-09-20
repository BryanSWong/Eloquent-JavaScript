// The arguments object

/*

 Whenever a function is called, a special variable named arguments is
 added to the environment in which the function body runs. This variable
 refers to an object that holds all of the arguments passed to the function.
 Remember that in JavaScript you are allowed to pass more (or fewer)
 arguments to a function than the number of parameters the function itself declares.

 */

function noArguments(){}

noArguments(1,2,3); // This is okay

console.log(noArguments(1,2,3)); // returns undefined due to no return value


function threeArguments(a,b,c){}

threeArguments(); // And so is this

console.log(threeArguments()); // returns undefined due to no return value




function argumentCounter(){

    console.log("You gave me", arguments.length, "arguments.");

}

argumentCounter("straw man", "Tautology", "Ad hominem");


/*

 Some functions can take any number of arguments, like console.log.
 These typically loop over the values in their arguments object.
 They can be used to create very pleasant interfaces. For example,
 remember how we created the entries to Jacques’ journal.

 */

function addEntry(squirrel){

    var entry = {events: [], squirrel: squirrel};

    for(var i =1; i < arguments.length; i++){

        entry.events.push(arguments[i]);

        journal.push(entry);

    }

    addEntry(true, "work", "touched tree", "pizza", "running", "television");

}
