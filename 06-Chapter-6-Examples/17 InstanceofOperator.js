/*

 It is occasionally useful to know whether an
 object was derived from a specific constructor.
 For this, JavaScript provides a binary operator
 called instanceof.

 */

// required functions for the code to work
function TextCell(text){
    this.text = text.split("\n");
}

function RTextCell(text){
    TextCell.call(this, text);
}
// required for code to work this makes RTextCell an instance of TextCell
RTextCell.prototype = Object.create(TextCell.prototype);

console.log(new RTextCell("A") instanceof RTextCell); // true
console.log();
console.log(new RTextCell("A") instanceof TextCell); // true
console.log();
console.log(new TextCell("A") instanceof RTextCell); // false
console.log();
console.log([1] instanceof Array); // true

/*

 The operator will see through inherited types. An RTextCell is
 an instance of TextCell because RTextCell.prototype derives from
 TextCell.prototype. The operator can be applied to standard
 constructors like Array. Almost every object is an instance
 of Object.

 */