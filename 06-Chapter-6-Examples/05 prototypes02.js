/*

 The Object.getPrototypeOf function obviously returns the
 prototype of an object. You can use Object.create to create
 an object with a specific prototype.

 */

var protoRabbit = {
    speak: function(line){
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};

var killerRabbit = Object.create(protoRabbit);

killerRabbit.type = "killer";

killerRabbit.speak("SKREEEE!");


/*

 The “proto” rabbit acts as a container for the properties
 that are shared by all rabbits. An individual rabbit object,
 like the killer rabbit, contains properties that apply only to
 itself—in this case its type—and derives shared properties
 from its prototype.

 */