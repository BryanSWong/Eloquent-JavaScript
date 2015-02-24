
function elementFromChar(legend, ch){
    if(ch == " ")
        return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function World(map, legend){
    var grid = new Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;

    map.forEach(function(line, y){
        for(var x =0; x < line.length; x++)
            grid.set(new Vector(x,y), elementFromChar(legend, line[x]));
    });
}


function charFromElement(element){
    if(element == null)
        return " ";
    else
        return element.originChar;
}

World.prototype.toString = function(){
    var output = " ";
    for(var y = 0; y < this.grid.height; y++){
        for(var x = 0; x < this.grid.width; x++){
            var element = this.grid.get(new Vector(x,y));
            output += charFromElement(element);
        }
        output += "\n";
    }
    return output;
};

function Wall(){}

var world = new World(plan, {"#": Wall,
    "o": BouncingCritter});

console.log(world.toString());


