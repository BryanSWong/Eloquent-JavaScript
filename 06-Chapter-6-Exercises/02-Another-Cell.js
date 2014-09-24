/*

 Developer: Bryan Wong

 Date: 09-17-2014

 Description:

 Another cell

 Implement a cell type named StretchCell(inner, width, height) that
 conforms to the table cell interface described earlier in the chapter.
 It should wrap another cell (like UnderlinedCell does) and ensure
 that the resulting cell has at least the given width and height,
 even if the inner cell would naturally be smaller.

 var sc = new StretchCell(new TextCell("abc"), 1, 2);
 console.log(sc.minWidth());
 // → 3
 console.log(sc.minHeight());
 // → 2
 console.log(sc.draw(3, 2));
 // → ["abc", "   "]

 */

function StretchCell(inner, width, height){

    this.inner = inner;
    this.width = width;
    this.height = height;
}

// StretchCell minWidth prototype
StretchCell.prototype.minWidth = function() {

    return Math.max(this.inner.text.length, this.width);

};
// StretchCell minHeight prototype
StretchCell.prototype.minHeight = function() {

    return this.height;
};

// StretchCell draw prototype
StretchCell.prototype.draw = function(width, height) {

    return this.inner.draw(width, height).concat(repeat(" ", width));

};


function TextCell(text){
    this.text = text;

}

TextCell.prototype.draw = function(width, height){
    var result = [];
    for(var i=0; i < height; i++){
        var line = this.text || "";
        result.push(line);
    }
    return result;
};


function repeat(string, times){
    var result = "";
    for(var j =0; j < times; j++)
    result += string;
    return result;
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);

console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]