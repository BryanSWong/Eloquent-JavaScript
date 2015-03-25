var context = null;

function withContext(newContext, body){

    var oldContext = context;

    context = newContext;

    try{
        return body();
    } finally {
        context = oldContext;
    }
}

try{

    withContext( 5, function(){
        if( context < 10)
        throw new Error("Not enough context!");
    });

} catch(e){
    console.log("Ignoring: " + e);
}

console.log(context);