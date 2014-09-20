/*

 In object literal, the get or set notation for properties allows you to specify
 a function to be run when the property is read or written. You can also add such
 a property to an existing object, for example a prototype, using the Object.defineProperty
 function (which we previously used to create nonenumerable properties).

 */

function TextCell(text) {
    this.text = text.split("\n");
}

Object.defineProperty(TextCell.prototype, "heightProp", {
    get: function() {return this.text.length}
});


var cell = new TextCell("No\nway");

console.log(cell.heightProp);

cell.heightProp = 100;
console.log();
console.log(cell.heightProp);