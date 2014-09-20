/*
Write a function arrayToList that builds up a data structure like the previous
one when given [1, 2, 3] as argument, and write a listToArray function that produces
an array from a list. Also write the helper functions prepend, which takes an element
and a list and creates a new list that adds the element to the front of the input
list, and nth, which takes a list and a number and returns the element at the given
position in the list, or undefined when there is no such element.
*/

/*var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};






var arr = [1,2,3];

function arrayToList(arr) {

    var list = {value: arr[arr.length-1], rest: null};

    for(var i=arr.length-2; i >= 0; i--){
        list = {value: arr[i], rest: list };
    }

    return list;

}

console.log(arrayToList(arr));

function displayLastelementOfArray(arr) {
    return arr[arr.length -1];
}

console.log(displayLastelementOfArray(arr));


console.log();

*/



function nth(list, num){

    var index = 0;

    for(node = list; node; node = node.rest) {

        if(index == num){
            return node.value;
        }
        index++;
    }

}

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log(nth(list, 1));



function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

// Outputs: true
console.log(isEquivalent(bobaFett, jangoFett));


//console.log(obj1.hasOwnProperty(prop));  // true all cases
//console.log(obj2.hasOwnProperty(prop));  // true all cases
//console.log(obj1[prop]); // case 1 {is: 'an'} , 2  case 2 {is: 'an'} , 2  case 3 {is: 'an'} , 2
//console.log(obj2[prop]); //  case 1 {is: 'an'} , 2 case 2  1 , 2          case 3 {is: 'an'} , 2
//console.log(obj1[prop] === obj2[i]);  // case 1 true, true | case 2 false, true |  case 3 false, true
//console.log(obj2.hasOwnProperty(i) != obj1.hasOwnProperty(i)); // false all

//console.log(typeof obj1[prop]); // case 1 object, number | case 2 object, number | case 3 object, number
//console.log(typeof obj2[prop]); // case 1 object, number | case 2 number, number | case 3 object, number
//console.log( obj1.here.is); // an
//console.log(obj2.here.is);  // an
