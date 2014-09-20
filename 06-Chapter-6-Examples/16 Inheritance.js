/*

 We are not quite done yet with our table layout
 exercise. It helps readability to right-align
 columns of numbers. We should create another cell
 type that is like TextCell but rather than padding
 the lines on the right side it pads them on the left
 side so that they align to the right.

 We could simply write a whole new constructor with all
 three methods in its prototype. But prototypes may
 themselves have prototypes, and this allows us to
 do something clever.

 */

var MOUNTAINS = require('./MOUNTAINS.js');

/*

 The first part of the program computes arrays of minimum column
 widths and row heights for a grid of cells. The rows variable will
 hold an array of arrays, with each inner array representing a row
 of cells.

 */

function rowHeights(rows){
    return rows.map(function(row){
        return row.reduce(function(max, cell){
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows){
    return rows[0].map(function(_,i){
        return rows.reduce(function(max,row){
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

// Here’s the code to draw a table:

function drawTable(rows){
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo){
        return blocks.map(function(block){
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum){
        var blocks = row.map(function(cell, colNum){
            return cell.draw(widths[colNum], heights[rowNum]);
        });

        return blocks[0].map(function(_,lineNo){
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

/*

 Now let’s write a constructor for cells that contain text,
 which implements the interface for table cells. The constructor
 splits a string into an array of lines using the string method
 split, which cuts up a string at every occurrence of its argument
 and returns an array of the pieces. The minWidth method finds
 the maximum line width in this array.

 */

function repeat(string, times){
    var result = "";
    for(var i =0; i < times; i++)
        result += string;
        return result;
}

function TextCell(text){
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function(){
  return this.text.reduce(function(width, line){
      return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function(){
  return this.text.length;
};

TextCell.prototype.draw = function(width, height){
  var result = [];

    for(var i = 0; i < height; i++){
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

/*

 We will want to highlight the top row, which contains the column names,
 by underlining the cells with a series of dash characters. No problem—we
 simply write a cell type that handles underlining.

 */

function UnderlinedCell(inner){
    this.inner = inner;
};

UnderlinedCell.prototype.minWidth = function(){
    return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function(){
    return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function(width, height){
    return this.inner.draw(width, height -1).concat([repeat("-", width)]);
};

/*

 Having an underlining mechanism, we can now write a function
 that builds up a grid of cells from our data set.

 */

/*
gets commented out because of changes and addition to program
new function of dataTable is made and can be seen further down
the program.

function dataTable(data){
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name){
        return new UnderlinedCell(new TextCell(name));
    });

    var body = data.map(function(row){
        return keys.map(function(name){
            return new TextCell(String(row[name]));
        });
    });

    return [headers].concat(body);
}

*/

/*

 We are not quite done yet with our table layout
 exercise. It helps readability to right-align
 columns of numbers. We should create another cell
 type that is like TextCell but rather than padding
 the lines on the right side it pads them on the left
 side so that they align to the right.

 We could simply write a whole new constructor with all
 three methods in its prototype. But prototypes may
 themselves have prototypes, and this allows us to
 do something clever.

 */

function RTextCell(text){
    TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height){
    var result = [];
    for(var i = 0; i < height; i++){
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

/*

 We reuse the constructor and the minHeight and minWidth
 methods from the regular TextCell. An RTextCell is now
 basically equivalent to a TextCell, except that its draw
 method contains a different function.

 This pattern is called inheritance.

 Now if we slightly adjust the dataTable function to use
 RTextCells for cells whose value is a number, we get the
 table we were aiming for.

 */

function dataTable(data){
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name){
        return new UnderlinedCell(new TextCell(name));
    });

    var body = data.map(function(row){
        return keys.map(function(name){
            var value = row[name];

            // this was changed
            if(typeof value == "number")

            return new RTextCell(String(value));

            else

            return new TextCell(String(value));
        });
    });
    return [headers].concat(body);
}

// displaying the table with Vaalserberg height 323 right adjusted:

console.log(drawTable(dataTable(MOUNTAINS)));