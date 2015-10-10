/**
 The exec method similarly does not provide a convenient way to start searching
 from a given position in the string. But it does provide an inconvenient way.

 Regular expression objects have properties. One such property is source,
 which contains the string that expression was created from. Another property
 is lastIndex, which controls, in some limited circumstances, where the next
 match will start.

 Those circumstances are that the regular expression must have the global (g)
 option enabled, and the match must happen through the exec method. Again, a
 more sane solution would have been to just allow an extra argument to be
 passed to exec, but sanity is not a defining characteristic of JavaScript’s
 regular expression interface.
 */

var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec("xyzzy");
console.log(match.index);
// 4
console.log(pattern.lastIndex);
// 5


/*
 If the match was successful, the call to exec automatically updates the lastIndex
 property to point after the match. If no match was found, lastIndex is set back to
 zero, which is also the value it has in a newly constructed regular expression object.

 When using a global regular expression value for multiple exec calls, these automatic
 updates to the lastIndex property can cause problems. Your regular expression might be
 accidentally starting at an index that was left over from a previous call.
 */

var digit = /\d/g;
console.log(digit.exec("here is is: 1"));
// ["1"]
console.log(digit.exec("and now: 1"));
// null

/*
 Another interesting effect of the global option is that it changes the way the match
 method on strings works. When called with a global expression, instead of returning an
 array similar to that returned by exec, match will find all matches of the pattern in the
 string and return an array containing the matched strings.
 */

console.log();
console.log("Banana".match(/an/g));
// ["an", "an"]

