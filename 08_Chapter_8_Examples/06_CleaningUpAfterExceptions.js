var context = null;

function withContext(newContext, body){

    var oldContext = context;

    context = newContext;

    var result = body();

    context = oldContext;

    return result;
}