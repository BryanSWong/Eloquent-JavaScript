/*

This is a function of a larger program from
chapter 4 Data Structures: Objects and Arrays
this program involves many functions, but for this purpose
the code is for demonstration of use of a function .forEach

 */


function gatherCorrelations(journal){
    var phis ={};

    for(var entry = 0; entry < journal.length; entry++){

        var events = journal[entry].events;

        for(var i = 0; i < events.length; i++){

            var event = events[i];

            if(!(event in phis))

            phis[event] = phi(tableFor(event, journal));
        }
    }

    return phis;

}

