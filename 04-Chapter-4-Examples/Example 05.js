// The lycanthrope’s log

var journal = [];

function addEntry(events,didITurnIntoASquirrel){

    journal.push({

        events: events,

        squirrel: didITurnIntoASquirrel

    });

}


/*

 And then, every evening at ten—or sometimes the next morning,
 after climbing down from the top shelf of his bookcase—he records the day.

 */


addEntry(["work", "touched tree", "pizza", "running", "television"], false);

addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);

addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

