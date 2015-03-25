function Person(name){this.name = name;}

var ferdinand = Person("Ferdinand"); // oops

console.log(name);
// → Ferdinand

// So the bogus call to Person succeeded but returned an undefined value and created the global variable name.