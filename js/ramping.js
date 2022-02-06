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
//
// function whichStringIsLonger(word1, word2) {
//     if(word1.length > word2.length) {
//         return "first";
//     }
//     if(word1.length < word2.length) {
//         return "second";
//     }
// }
//
// console.log(whichStringIsLonger('two','by'));

// function convertLowHighToObject(highLow) {
//
// }

// function randomTest() {
//     var min = 0;
//     var max = 5;
//     var random = Math.random() * (+max - +min) + +min;
//     console.log("Random Number Generated : " + random);
// }
//
// randomTest();

var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(cars) {
    cars.features.forEach(function(feature) {
        console.log(feature);
    });
});