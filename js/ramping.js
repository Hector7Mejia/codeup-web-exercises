 // Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75

// const average = (array) => array.reduce((a, b) => a + b) / array.length;
// console.log(average([1,500]));

// write a function called sumOfSquares(a, b)
// takes 2 parameters called a and b
// returns the sum of the squares of a and b
// i.e., (a to the power of 2) + (b to the power of 2)
// e.g., console.log(sumOfSquares(2, 3));
// will return 13.

// function sumOfSquares(a,b) {
//     return (a * a) + (b * b)
// }
//
// console.log(sumOfSquares(5,5))

// Write a function called whichStringIsLonger() that takes two parameters and returns one of 4 values:
//     returns "first" if the first string parameter is longer
// returns "second" if the second parameter is longer
// returns "neither" if they are the same length
// returns false if either or both of the parameters are not strings
// //
// function whichStringIsLonger(word1, word2) {
//     if (typeof word1 != "string" || typeof word2 != "string") {
//         return "false";
//     }
//     else if (word1.length === word2.length) {
//         return "neither";
//     }
//     else if(word1.length > word2.length) {
//         return "first";
//     }
//     else if(word1.length < word2.length) {
//         return "second";
//     }
// }
//
// console.log(whichStringIsLonger("FALSE","true"));

// function convertLowHighToObject(highLow) {
//
// }

// function randomTest() {
//     var min = 0;
//     var max = 5;
//     var random = Math.random() * (+max - +min) + +min;
//     console.log("Random Number Generated : " + Math.floor(random));
// }
//
// randomTest();

// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//  console.log("The features of the second car include " + cars[1].features + "." )
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(cars) {
//     cars.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

// const isDivisibleBy3 = n => n % 3 === 0;
// //
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //
// // console.log(numbers.filter(isDivisibleBy3));
// // console.log(numbers);

// if (true) {
//     let x = 5;
// }
// console.log(typeof x);

//        Write a function called countDuplicates that takes in a string and returns an object that contains the count for each letter within the given string.
//        ex: countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
//        returns { a: 5, d: 4, s: 5, j: 4, f: 4, h: 1, c: 2, b: 2 }


// Write a function called removeAll that takes two parameters. One that represents an array and another that represents a value to be removed from that array. When called this function should return an array with all the values of the original array except the specified value to be removed.
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// console.log(removeAll(bugs, "ant"));
// // should print
// [
//     'mosquito',
//     'scorpion',
//     'mosquito',
//     'typo',
//     'reference error',
//     'type error'
// ]
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// console.log(removeAll(bugs, "ant"));


//
// function removeAll (arrayToRemove, valToRemove) {
//
//     var newArray = [];
//
//     //copy all elements from arrayToRemove to newArray
//     // except elements that are valToRemove
//     for (let i = 0; i < arrayToRemove.length; i++) {
// //arrayToRemove[i] is specifically targeting the elements of the array as opposed to just i being the index
//         if (arrayToRemove[i] !== valToRemove) {
//             newArray.push(arrayToRemove[i]);
//         }
//     }
//
//     return newArray
// }

// Write a function called mapValueToColor that takes an int parameter called colorVal and returns a string that is the associated color. If no color maps to the given colorVal then return an empty string. The color table is as follows:
// 1	Blue
// 2 	Red
// 3	Orange
// 4	Yellow
// 5 	Violet
// 6	Black
// 7	White
// example:
//     let myColor = mapValueToColor(3);
// console.log(myColor); // prints “Orange”

// function  mapValueToColor (colorVal) {
//     //take an int called colorVal and return the color from the table
//     // return stops function
//
//     switch (colorVal) {
//         case 1:
//             return "Blue"
//         case 2:
//             return "Red"
//         case 3:
//             return "Orange"
//         case 4:
//             return "Yellow"
//         case 5:
//             return "Violet"
//         case 6:
//             return "Black"
//         case 7:
//             return "white"
//         default:
//             return ""
//     }
//
// }
// console.log(mapValueToColor("one"));
//
//  Write a function called makePerson. It takes 2 arguments: personName and age.
//      personName must be at least 1 character long. age must be between 1 and 150.
//  If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
//      If both parameters are valid, return an object containing personName and age.
//      E.g.,
//      console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
//  console.log(makePerson("", 30));
//  // outputs:
//  Person name cannot be blank
//  // false

 // function makePerson(personName, age) {
 //     if (personName.length && age >= 1 && age <= 150) {
 //
 //     }
 // }

 // function showMultiplicationTable(toTimesTable) {
 //     for (let i = 0; i <= 10; i++) {
 //         console.log(toTimesTable + " x " + (i) + " = " + toTimesTable * (i));
 //     }
 // }
 //
 // showMultiplicationTable(7);