/*
 This is the second sum of range program.
 This was also the exercise at the end of chapter 4.
 This was recreated from just the console.log command:
 the basics of the program.
 console.log(sum(range(1, 10)));


 */



function range(start, end){
    var arr = [];

    for(var i = start; i <= end; i++){
        arr.push(i);
    }

    return arr;

}


function sum(arr){

    var total = 0;

    for(var j = 0; j < arr.length; j++){
        total += arr[j];
    }

    return total;

}
//console.log(range(1,10));

console.log(sum(range(1, 10)));