/*

 The project is this: we will write a program that, given an
 array of arrays of table cells, builds up a string that contains
 a nicely laid out table—meaning that the columns are straight and
 the rows are aligned. Something like this:

 */

/*

 The first part of the program computes arrays of minimum column
 widths and row heights for a grid of cells. The rows variable will
 hold an array of arrays, with each inner array representing a row
 of cells.

 */

var MOUNTAINS = require('./MOUNTAINS.js');


function rowHeights(rows){
    return rows.map(function(row){
        return row.reduce(function(max, cell){
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows){
    return rows[0].map(function(_, i){
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
        return blocks[0].map(function(_, lineNo){
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
    for(var i = 0; i < times; i++)
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

console.log(drawTable(dataTable(MOUNTAINS)));