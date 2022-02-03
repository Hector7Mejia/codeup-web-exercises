
/*
4k or 10k with cash in cash
5k 720
3k 720 no
590 9k no*/
/*
let creditScore = 680;
let cashOnHand = 2000;

if (creditScore >= 680 && cashOnHand >=4000) {
    console.log("Your credit is good, only 5k is needed down");
} else if (cashOnHand >=10000){
    console.log("Sorry with your credit that will be 10k down");
} else {
    console.log("you can not get A loan")
}
Declare a function called 'isFive' that takes in an input and returns true if that input is the number five. Otherwise it should return false.
    */
/*
function isFive(five)

let num = "five"{

    return !!(num = "five");
}
isFive(num)
*/
// function isMultipleOfThree(x) {
//     if (x % 3 === 3) {
//     return true;
// } else{
//     return false;
// }
// }

// let counter = 0; // starting point

/*

var i = 0;
while(i < 24) {
    i += 2;
    console.log(i);
}
*/
/*

function add(num1, num2){
    return (num1 + num2);
}

console.log(add(1,2))

function square(numToSqr){
    return (numToSqr * numToSqr)
}

console.log(square(7))

function sumOfSquares(a,b){
    return add(square(a), square(b));
}

console.log(" 3 squared + 2 squared = " + sumOfSquares(3,2));*/

/*function getFizzBuzz(startingNum) {
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return("FIZZ BUZZ")
    }
    if (startingNum % 3 === 0 ) {
        console.log("Fizz")
    }
    if (startingNum % 5 === 0){
        console.log("Buzz")
    }
     else {
        return "that's not a good fizz"
    }
}

console.log(getFizzBuzz(5));

 */
/*
function getPassword() {
    let correctPassword = "password"
    let userInput = prompt("Enter the password")
    while(userInput !== password){
        alert("Thats not the right password! Try again")
        userInput = prompt("Enter the password please")
    }
}*/
/*
var counter = 0;
function getMeaningOfLife(meaningfulNum) {
    while (counter !== meaningfulNum) {
        counter++
    }
        console.log("The meaning of life, the universe, and everything is " + meaningfulNum);
    if(counter === 42) {
        console.log("Did you bring a towel?")
    }
}
getMeaningOfLife(100);*/


// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*
/*
function myFirstForLoop(numOfIterations){

    for (let i = 1; i <= numOfIterations; i++){
        if(i % 2 === 1)
        console.log("Iteration count: "  + i);
    }

}
*/

/*
myFirstForLoop(5);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

/!*
Mini Exercise
-Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
-Write a function that accepts an array as a parameter and...
-> logs the first, third, and last elements of that array
-Invoke your function and pass favoriteArtists as an argument*!/


Artists["AS", "Leon"]*/


/*
"use strict";

var movies = {};
movies.title = "Pulp Fiction";
movies.rating = "Excellent";

// create a logMakeModel method on the car object
movies.logMakeModel = function () {
    console.log("Movie title is: " + this.title);
    console.log("Movie rating is: " + this.rating);
};

// log the make/model
movies.logMakeModel();*/

/*
let concateString = ["one", "two", "three"]
function arrayToString(myArray) {
    for (let i = 0; i < myArray.length){

    }
}

console.log()*/
/*

avaScript Warmup:
    Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.*/

/*
function removeAll(toBeRemoved) {
    for (let i = 0; i < myArray.length; i++) {

    }
}
*/
/*

function addNums(num1, num2) {

   return num1 + num2;
}

console.log(addNums(5,7))*/

//     function reverseString(str) {
//         return str;
//     }
//     reverseString("hello");
// }

"use strict";

var myNameIs = 'Hector'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.

function sayHello(name) {

}
// // TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
// sayHello(myNameIs);
// // Don't modify the following line
// // It generates a random number between 1 and 100 and stores it in random
// var random = Math.floor((Math.random()*100)+1);
//
// // TODO:
// // Create a function called 'isOdd' that takes a number as a parameter.
// // The function should use the ternary operator to log a message.
// // The log should tell the number passed in and whether it is odd or not.
// let result = ""
// function isOdd(num) {
//     let result = (num % 2 === 0) ? console.log("your number is even") : console.log("your number is odd");
// }
//
// // TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
//
// isOdd(random);