/*

 This is a function of a larger program from
 chapter 4 Data Structures: Objects and Arrays
 this program involves many functions, but for this purpose
 the code is for demonstration of use of a function .forEach

 Working with forEach makes it slightly shorter and quite a bit cleaner:

 */


function gatherCorrelations(journal){

    var phis ={};

    journal.forEach(function(entry){

        entry.events.forEach(function(event){

            if(!(event in phis))

            phis[event] = phi(tableFor(event, journal));
        });
    });

    return phis;

}