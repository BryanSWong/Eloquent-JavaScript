/*

 Fortunately, JavaScript provides a technique that gets us the best of both worlds.
 We can specify properties that, from the outside, look like normal properties
 but secretly have methods associated with them.

 */

var pile = {
    elements: ["eggshell", "orange peel", "worm"],

    get height(){
        return this.elements.length;
    },

    set height(value){
        console.log("Ignoring attepmt to set height to", value);
    }
};


console.log(pile.height);
console.log();
pile.height = 100;