/*'use strict';*/

let skipThis = 27;
console.log("Number to skip is: " + skipThis);
for (var i = 1; i < 50; i++) {

    if (i === 27) {


        console.log("Number to skip is: " + i);
        continue;
    }

    if (i % 2 !== 1) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is an odd number: ' + i);



}

// var numberToStopAt = 25;
//
// for (var i = 1; i < 50; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!' + i);
//         // use the break keyword to exit from the while loop
//         continue;
//     }
// }
