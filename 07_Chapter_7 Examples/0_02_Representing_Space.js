
function Vector(x,y){
    this.x = x;
    this.y = y;

}

Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};


var grid = [["top left", "top middle" , "top right"], ["bottom left", "bottom middle", "bottom right"]];

console.log(grid[1][2]);

function Grid(width, height){
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;

}

Grid.prototype.isInside = function(vector){
    return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;

};

Grid.prototype.get = function(vector){
    return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function(vector, value){
    this.space[vector.x + this.width * vector.y] = value;
};

//test

var grid = new Grid(5,5);
console.log(grid.get(new Vector(1,1)));

grid.set(new Vector(1,1), "X");
console.log(grid.get(new Vector(1,1)));
