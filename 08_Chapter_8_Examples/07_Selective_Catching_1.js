for(;;){
    try{

        var dir = promtDirection("Where?"); // typo in prompt or in this case not declared at all.

        console.log("you chose ", dir);

        break;
    } catch(e){
        console.log("Not a valid direction. Try again.");
    }
}


// results in error and flooding your console with "Not a valid direction. Try again."