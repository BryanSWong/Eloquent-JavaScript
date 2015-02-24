
World.prototype.turn = function(){
    var acted = [];
    this.grid.forEach(function(critter, vector){
        if(critter.act && acted.indexOf(critter) == -1){
            acted.push(critter);
            this.letAct(critter, vector);
        }
    }, this);
};


World.prototype.letAct = function(critter, vector){
    var action = critter.act(new View(this, vector));
    if(action && action.type == "move"){
        var dest = this.checkDestination(action, vector);
        if(dest && this.grid.get(dest)  == null){
            this.grid.set(vector, null);
            this.grid.set(dest, critter);
        }
    }
};


World.prototype.checkDestination = function(action, vector){
    if(direction.hasOwnProperty(action.direction)){
        var dest = vector.plus(direction[action.direction]);
        if(this.grid.isInside(dest))
            return dest;
    }
};


function View(world, vector){
    this.world = world;
    this.vector = vector;
}

View.prototype.look = function(dir){
    var target = this.vector.plus(direction[dir]);
    if(this.world.grid.isInside(target))
        return charFromElement(this.world.grid.get(target));
    else
        return "#"
};

View.prototype.findAll = function(ch){
    var found = [];
    for(var dir in directions)
        if(this.look(dir) == ch)
            found.push(dir);
    return found;
};

View.prototype.find = function(ch){
    var found = this.findAll(ch);
    if(found.length == 0)
        return null;
    return randomElement(found);
};

