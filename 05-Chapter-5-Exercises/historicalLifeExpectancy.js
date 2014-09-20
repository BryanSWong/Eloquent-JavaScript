/*

 Developer: Bryan Wong

 Date: 09-01-2014

 Description:

 Historical life expectancy

 When we looked up all the people in our data set that lived more than ninety years, only the very latest generation
  in the data came out. Let’s take a closer look at that phenomenon.

 Compute and output the average age of the people in the ancestry data set per century. A person is assigned
 to a century by taking their year of death, dividing it by a hundred, and rounding it up,
 as in Math.ceil(person.died / 100).

 function average(array) {
 function plus(a, b) { return a + b; }
 return array.reduce(plus) / array.length;
 }

 // Your code here.

 // → 16: 43.5
 //   17: 51.2
 //   18: 52.8
 //   19: 54.8
 //   20: 84.7
 //   21: 94


 The essence of this example lies in grouping the elements of a collection by some aspect of
 theirs—splitting the array of ancestors into smaller arrays with the ancestors for each century.

 During the grouping process, keep an object that associates century names (numbers) with arrays
 of either person objects or ages. Since we do not know in advance what categories we will find,
 we’ll have to create them on the fly. For each person, after computing their century, we test
 whether that century was already known. If not, add an array for it. Then add the person (or age)
 to the array for the proper century.

 Finally, a for/in loop can be used to print the average ages for the individual centuries.


 */

//Get the data from ancestry.js file.
var ANCESTRY_FILE = require('./ancestry.js');

//Convert the imported data to JSON.
var ancestry = JSON.parse(ANCESTRY_FILE);


function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

// maps ancestry into a array by century for each person.
var centuryMap = ancestry.map(function(person){
    return Math.ceil(person.died / 100);
});
// console.log(centuryMap.length);
// function that gets the century and adds it to object set if not known, and calls another function for ages.
function historicalLifeExpectancy(centuryMap){

    var centurySets = {}; // object that stores the century and ages

    for(var i = 0; i < centuryMap.length; i++){

        var century = centuryMap[i]; // tracks the current century

        if(!(century in centurySets)) // any century that is not part of the object gets added

            centurySets[century] = Math.round(average(agesInCentury(century))*10)/10;
    }
    return centurySets;
}
// function that sets the ages of a century into an array.
function agesInCentury(centHere){

    var arr =[]; // array to store ages found

    for(var k = 0; k < ancestry.length; k++){
        // checks the target century to current ancestry index
        if(centHere == Math.ceil(ancestry[k].died / 100)){
            // matches are pushed to array
            arr.push(ancestry[k].died - ancestry[k].born);
        }
    }
    return arr;
}

var chart = historicalLifeExpectancy(centuryMap);

for( var prop in chart){
    console.log(prop + ": " + chart[prop]);
}

/*

 For bonus points, write a function groupBy that abstracts the grouping operation.
 It should accept as arguments an array and a function that computes the group for
 an element in the array and returns the object containing the groups.

 goals:
 1. Create function groupBy. done
 2. Arguments should be array and function. done
 3. Computes the group for an element in array.
 4. returns object containing the groups.


 */
// bonus question
function groupBy(array, func){

    var grouped = {};

    for(var l =0; l < array.length; l++){

        var century = array[l];

        if(!(century in grouped))

            grouped[century] = Math.round((average(func(century))) *10)/10;
    }

    return grouped;
}
/*
console.log();
console.log("The groupBy function");
var grouping = groupBy(centuryMap, agesInCentury);

for(prop in grouping){
    console.log(prop + ":" + grouping[prop]);
}
/*
console.log();
console.log("The groupBy function");
console.log(groupBy(centuryMap, agesInCentury));
*/

/*
16: 43.5
17: 51.2
18: 52.8
19: 54.8
20: 84.7
21: 94

*/