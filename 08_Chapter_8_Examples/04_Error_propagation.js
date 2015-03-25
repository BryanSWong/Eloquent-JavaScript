function promptNumber(question){
    var result = Number(prompt(question, ""));

    if(isNaN(result)) return null;

    else return result;

}

console.log(promptNumber("How many trees do you see?"));

//this you can tyoe into your web browser to see the results in action the code does work.