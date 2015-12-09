/*

 Write a simple module similar to the weekDay module that can convert month numbers
 (zero-based, as in the Date type) to names and can convert names back to numbers.
 Give it its own namespace since it will need an internal array of month names, and
 use plain JavaScript, without any module loader system.

 hints:
 This follows the weekDay module almost exactly. A function expression, called immediately,
 wraps the variable that holds the array of names, along with the two functions that must be
 exported. The functions are put in an object and returned. The returned interface object is
 stored in the month variable.

 */

// Your code here.

var month = function(){
    var name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return {
        name: function(number){ return name[number];},
        number: function(tar){ return name.indexOf(tar);}
    };
}();



console.log(month.name(2));
// → March
console.log();
console.log(month.number("November"));
// → 10
console.log();
/*
console.log(month.name(6));
// July
console.log();
console.log(month.number("January"));
// 0
console.log();
console.log(month.name(11));
// December
*/