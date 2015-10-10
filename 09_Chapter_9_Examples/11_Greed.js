// It isn’t hard to use replace to write a function that removes all comments
// from a piece of JavaScript code. Here is a first attempt:

function stripComments(code){
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// 1 + 3
console.log(stripComments("x = 10; // ten!"));
// x = 10
console.log(stripComments("1 /* a */+/* b */ 1"));
// 1 1

/*
 we say the repetition operators (+, *, ?, and {}) are greedy, meaning they match as
 much as they can and backtrack from there. If you put a question mark after them
 (+?, *?, ??, {}?), they become nongreedy and start by matching as little as possible,
 matching more only when the remaining pattern does not fit the smaller match.

 And that is exactly what we want in this case. By having the star match the smallest
 stretch of characters that brings us to a * /,we consume one block comment and nothing more.
*/

function stripComments2(code){
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log();
console.log(stripComments2("1 /* a */ + /* b */ 1"));
// 1 + 1