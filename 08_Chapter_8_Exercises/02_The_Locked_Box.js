/*

 Consider the following (rather contrived) object:

 var box = {
 locked: true,
 unlock: function() { this.locked = false; },
 lock: function() { this.locked = true;  },
 _content: [],
 get content() {
 if (this.locked) throw new Error("Locked!");
 return this._content;
 }
 };

 It is a box with a lock. Inside is an array, but you can get at it only when the box is unlocked.
 Directly accessing the _content property is not allowed.

 Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box,
 runs the function, and then ensures that the box is locked again before returning, regardless of
 whether the argument function returned normally or threw an exception.

 */

var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body){
// your code here

    var lockBox = box.locked; //make lockBox equal to the status of box.locked.

    // Check if the box is locked.
    if(lockBox == true){
        box.unlock(); // If the box is locked then unlock it.
        //console.log("This is the first console check for box is locked or not: " + box.locked);
    }

    // current start of try
    try{
        return body();

    } catch(error){
        //throw error; //with this expression the error will show up so I left it out or catch to do nothing.

    }
    // close the box if its still open at this point.
    finally{
        if(lockBox == false){
            box.lock(); // locks the box
            //console.log("This is the console in the finally section of code: " + box.locked);
            //console.log(box._content);
        }

    }
}

withBoxUnlocked(function(){
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function(){
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch(e){
    console.log("Error raised", e);
}

console.log(box.locked);
// true