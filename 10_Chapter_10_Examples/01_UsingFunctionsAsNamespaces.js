/*
 Functions are the only things in JavaScript that create a new scope. So if we want our modules
 to have their own scope, we will have to base them on functions.

 Consider this trivial module for associating names with day-of-the-week numbers, as returned
 by a Date object’s getDay method:
 */

var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function dayName(number){
    return names[number];
}

console.log(dayName(1)); // Monday
console.log();

/*
 The dayName function is part of the module’s interface, but the names
 variable is not. We would prefer not to spill it into the global scope.

 We can do this:
 */

var dayName = function(){
    var names = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return function(number){
        return names[number];
    };
}();

console.log(dayName(3)); // Wednesday
console.log();

/*
 We can use a similar pattern to isolate code from the outside world entirely.
 The following module logs a value to the console but does not actually provide
 any values for other modules to use:
 */

(function(){
    function square(x){ return x * x;}
    var hundred = 100;

    console.log(square(hundred));
})();

// 10000