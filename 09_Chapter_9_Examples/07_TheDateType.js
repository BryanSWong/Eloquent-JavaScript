//If you simply create a date object using new, you get the current date and time.
console.log(new Date());
//You can also create an object for a specific time.
console.log();
console.log(new Date(2009, 11, 9));
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)
//The getTime method on a date object returns this number. It is big, as you can imagine.
console.log();
console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
console.log(new Date(1387407600000));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CMT)
//Putting parentheses around the parts of the expression that we are interested in,
//we can now easily create a date object from a string.
console.log();
function findDate(string){
    var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    var match = dateTime.exec(string);
    return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
}
console.log(findDate("30-1-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)