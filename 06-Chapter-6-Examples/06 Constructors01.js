/*

 Here is a simple constructor for rabbits. It is a convention
 to capitalize the names of constructors so that they are easily
 distinguished from other functions.

 */


function Rabbit(type){
    this.type = type;
}

var killerRabbit = new Rabbit("killer");

var blackRabbit = new Rabbit("black");

console.log(blackRabbit.type);
// black


/*

 Constructors (in fact, all functions) automatically get a
 property named prototype, which by default holds a plain,
 empty object that derives from Object.prototype. Every instance
 created with this constructor will have this object as its prototype.
 So to add a speak method to rabbits created with the Rabbit
 constructor, we can simply do this:

 */

Rabbit.prototype.speak = function(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
};

console.log();
blackRabbit.speak("Doom...");
// The black rabbit says 'Doom...'

console.log();

/*

 Overriding derived properties

 When you add a property to an object, whether it is present
 in the prototype or not, the property is added to the object
 itself, which will henceforth have it as its own property.
 If there is a property by the same name in the prototype,
 this property will no longer affect the object.
 The prototype itself is not changed.

 */

Rabbit.prototype.teeth = "samll";

console.log(killerRabbit.teeth);
// small

console.log();

killerRabbit.teeth = "long, sharp, and bloody";

console.log(killerRabbit.teeth);
// long, sharp, and bloody

console.log();

console.log(blackRabbit.teeth);
// small

console.log();

console.log(Rabbit.prototype.teeth);
// small