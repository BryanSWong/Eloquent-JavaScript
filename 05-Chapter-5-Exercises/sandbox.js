//Get the data from ancestry.js file.
var ANCESTRY_FILE = require('./ancestry.js');

//Convert the imported data to JSON.
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var centuryMap = ancestry.map(function(person){
    return Math.ceil(person.died / 100);
});

/*

 For bonus points, write a function groupBy that abstracts the grouping operation.
 It should accept as arguments an array and a function that computes the group for
 an element in the array and returns the object containing the groups.

 goals:
 1. Create function groupBy.
 2. Arguments should be array and function.
 3. Function computes the group for an element in array.
 4. returns object containing the groups.

 */

function groupBy(array, func){

    var grouped = {};

    for(var l =0; l < array.length; l++){

        var century = array[l];

        if(!(century in grouped))

        grouped[century] = Math.round((average(func(century))) *10)/10;
    }

    return grouped;
}

function agesInCentury(centHere){

    var arr =[];

    for(var k = 0; k < ancestry.length; k++){

        if(centHere == Math.ceil(ancestry[k].died / 100)){

            arr.push(ancestry[k].died - ancestry[k].born);
        }
    }
    return arr;
}


console.log(groupBy(centuryMap, agesInCentury));






