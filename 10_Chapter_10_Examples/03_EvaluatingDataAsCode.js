/*
 The most obvious way is the special operator eval, which will execute a string of
 code in the current scope. This is usually a bad idea because it breaks some of the
 sane properties that scopes normally have, such as being isolated from the outside world.
 */

function evalAndReturnX(code){
    eval(code);
    return x;
}

console.log(evalAndReturnX("var x = 2")); //2
console.log();

/*
 A better way of interpreting data as code is to use the Function constructor.
 This takes two arguments: a string containing a comma-separated list of argument
 names and a string containing the function’s body.
 */

var plusOne = new Function("n", "return n + 1;");

console.log(plusOne(4)); //5
console.log();