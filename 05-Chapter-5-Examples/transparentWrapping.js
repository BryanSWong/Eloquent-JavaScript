/*

 JavaScript functions have an apply method. You pass it an
 array (or array-like object) of arguments, and it will call
 the function with those arguments.

 */


function transparentWrapping(f){
    return function() {
        return f.apply(null, arguments);
    };
}


console.log(transparentWrapping(1,"string", true));