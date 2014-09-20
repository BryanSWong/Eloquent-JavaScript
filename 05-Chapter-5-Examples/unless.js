/*
Higher-order functions allow us to abstract over actions,
 not just values. They come in several forms. For example,
 you can have functions that build new types of control flow:

 */


function unless(test, then){
    if(!test) then();
}

function repeat(times, body){

    for(var i = 0; i < times; i++) body(i);
}

repeat(3, function(n){

    unless(n % 2, function(){
        console.log(n, "is even");
    });
});



