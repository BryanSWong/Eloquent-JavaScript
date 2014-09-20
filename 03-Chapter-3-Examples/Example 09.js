// The call stack part 2

function chicken(){
    return egg();
}

function egg(){
    return chicken();
}

console.log(chicken() + "came first");

