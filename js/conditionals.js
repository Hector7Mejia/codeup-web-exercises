"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 *//*
function analyzeColor (color){

    if        (color === 'red') {
        return("Apples are red.");
        // code here gets executed if condition1 evaluates to true
    } if (color === 'orange') {
        return("Basketballs are orange.");
        // code here gets executed if condition2 evaluates to true
    } if (color ==='yellow') {
        return("Daisies are yellow.");
        // code here gets executed if neither condition1 nor condition2 evaluate to true
    } if(color ==='green') {
        return("Grass is green.");

    }
        {
            return("I do not know anything by that color.");
        }
}

analyzeColor("red")*/
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
/*analyzeColor(randomColor)*/
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
/*function analyzeColor(color) {

    switch (color) {
        case "red":
            alert("Apples are red");
            break;
        case "orange":
            alert("Basketballs are orange");
            break;
        default:
            alert(color + " I do not know anything about that color");
            break;
    }
}
var color = prompt("Give me a color");
analyzeColor(color)*/
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let random = Math.floor(Math.random() * (5))
function calculateTotal(totalAmount,luckyNum){
    if (luckyNum == 1){
        return totalAmount * .9
    }
    if (luckyNum == 2){
        return totalAmount * .75
    }
    if (luckyNum == 3){
        return totalAmount * .65
    }
    if (luckyNum == 4){
        return totalAmount * .5
    }
    if (luckyNum == 5){
        return totalAmount - totalAmount
    } else{
        console.log("You receive no discount")
    }




        }

/*
console.log(calculateTotal(100,random))
*/
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
var calculate = prompt("Total bill");
console.log(calculateTotal(calculate,luckyNumber))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
alert('Would you like to enter a number');
var number = parseInt(prompt("Whats your number"));
function userNumber (number) {
    if (number % 2 === 0) {
        alert(number + "is even!");
    } else {
        alert(number + "is odd!")
    }
    if (number >= 100) {
        alert(number + "is greater than 100!")
    } else {
        alert (number + "is less than 100!")
    }
    if (number > 0){
        alert(number + "is positive")
    } else {
        alert (number + "is negative")
    }
}