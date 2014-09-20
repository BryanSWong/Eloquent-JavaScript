// Further arrayology

var todolist = [];

function rememberTo(task){

    todolist.push(task);

}


function whatIsNext(){

    return todolist.shift();

}

function urgentlyRememberTo(task) {

    todolist.unshift(task);

}

rememberTo("eat");
rememberTo("study");
rememberTo("sleep");
console.log(todolist);
console.log(whatIsNext());
console.log(whatIsNext());
urgentlyRememberTo("shower");
console.log(todolist);
console.log(whatIsNext());
console.log(whatIsNext());
console.log(whatIsNext());
console.log(todolist);

/*

 The indexOf method has a sibling called lastIndexof, which starts
 searching for the given element at the end of the array instead of the front.

 */

console.log();
console.log("indexOf and lastIndexOf examples:")
console.log([1,2,3,2,1].indexOf(2)); // → 1
console.log(" ");
console.log([1,2,3,2,1].lastIndexOf(2)); // → 3


/*

 Another fundamental method is slice, which takes a start index and an
 end index and returns an array that has only the elements between those
 indices. The start index is inclusive, the end index exclusive.

 */
console.log();
console.log("slice examples:");
console.log([0,1,2,3,4].slice(2,4)); // [2,3]
console.log();
console.log([0,1,2,3,4].slice(2)); // [2,3,4]


/*

 The concat method can be used to glue arrays together, similar to
 what the + operator does for strings. The following example shows
 both concat and slice in action. It takes an array and an index,
 and it returns a new array which is a copy of the original array
 with the element at the given index removed.

 */

function remove(array,index){

    return array.slice(0,index).concat(array.slice(index+1))
}

console.log();
console.log(remove(["a", "b", "c", "d", "e"], 2)); // → ["a", "b", "d", "e"]

