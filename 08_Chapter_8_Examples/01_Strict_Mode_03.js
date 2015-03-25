"use strict";
function Person(name){this.name = name;}

//Ooops, forgot 'new'

var ferdinand = Person("Ferdinand");

// → TypeError: Cannot set property 'name' of undefined


