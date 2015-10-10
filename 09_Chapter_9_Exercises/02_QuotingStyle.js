/**
 Imagine you have written a story and used single quotation marks throughout to
 mark pieces of dialogue. Now you want to replace all the dialogue quotes with
 double quotes, while keeping the single quotes used in contractions like aren’t.

 Think of a pattern that distinguishes these two kinds of quote usage and craft
 a call to the replace method that does the proper replacement.

 The most obvious solution is to only replace quotes with a nonword character
 on at least one side. Something like /\W'|'\W/. But you also have to take the
 start and end of the line into account.

 In addition, you must ensure that the replacement also includes the characters
 that were matched by the \W pattern so that those are not dropped. This can be
 done by wrapping them in parentheses and including their groups in the replacement
 string ($1, $2). Groups that are not matched will be replaced by nothing.

 */

var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/A/g, "B"));
// → "I'm the cook," he said, "it's my job."