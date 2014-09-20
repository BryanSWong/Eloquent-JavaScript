// power function

var power = function(base, exponent){
    var result =1;
    for(var count = 0; count < exponent; count++){
        result *=base;

    }
    return result;
}

console.log(power(2,10));  // 1024

