
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

function getFizzBuzz(startingNum){
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return("FIZZ BUZZ")
    }
    if (startingNum % 3 === 0 ) {
        console.log("Fizz")
    }   if (startingNum % 5 === 0){
        console.log("Buzz")
    }
}

console.log(getFizzBuzz(5));