/*
 There are cases where you might not know the exact pattern you need to match against
 when you are writing your code. Say you want to look for the user’s name in a piece of
 text and enclose it in underscore characters to make it stand out. Since you will know
 the name only once the program is actually running, you can’t use the slash-based notation.

 But you can build up a string and use the RegExp constructor on that. Here’s an example:
 */

var name = "harry";
var text = "Harry is a suspicious character";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// _Harry_ is a suspicious character.

/*
 But what if the name is "dea+hl[]rd" because our user is a nerdy teenager? That would
 result in a nonsensical regular expression, which won’t actually match the user’s name.

 To work around this, we can add backslashes before any character that we don’t trust.
 Adding backslashes before alphabetic characters is a bad idea because things like \b
 and \n have a special meaning. But escaping everything that’s not alphanumeric or
 whitespace is safe.
 */

var name2 = "dea+hl[]rd";
var text2 = "This dea+hl[]rd guy is super annoying.";
var escaped = name2.replace(/[^\w\s]/g, "\\$&");
var regexp2 = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text2.replace(regexp2, "_$1_"));
// This _dea+hl[]rd_ guy is super annoying.

