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