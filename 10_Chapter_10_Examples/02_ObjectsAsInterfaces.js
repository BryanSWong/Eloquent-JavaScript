/*
 Now imagine that we want to add another function to our day-of-the-week module,
 one that goes from a day name to a number. We can’t simply return the function
 anymore but must wrap the two functions in an object.
 */

var weekDay = function(){
    var names = ["Sunday", " Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return {
        name: function(number){ return names[number];},
        number: function(name){ return names.indexOf(name); }
    };
}();

console.log(weekDay.name(weekDay.number("Sunday"))); //Sunday
console.log();

/*
 A convenient alternative is to declare an object (conventionally named exports)
 and add properties to that whenever we are defining something that needs to be
 exported. In the following example, the module function takes its interface object
 as an argument, allowing code outside of the function to create it and store it in
 a variable. (Outside of a function, this refers to the global scope object.)
 */

(function(exports){
    var names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    exports.name = function(number){
      return names[numbers];
    };

    exports.number = function(name){
        return names.indexOf(name);
    };
})(this.weekDay = {});

console.log(weekDay.name(weekDay.number("Saturday"))); // Saturday
console.log();

console.log(weekDay.number("Monday"));