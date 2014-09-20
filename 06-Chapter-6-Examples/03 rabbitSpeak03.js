/*

  There is a method similar to apply, called call. It also calls
  the function it is a method of but takes its arguments normally,
  rather than as an array. Like apply and bind, call can be passed
  a specific this value.

 */


function speak(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");

}

var fatRabbit = {type: "fat", speak: speak};

speak.apply(fatRabbit, ["Burp!"]);

console.log();

speak.call({type: "old"}, "oh my.");
