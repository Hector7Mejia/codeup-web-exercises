/*
4k or 10k with cash in cash
5k 720
3k 720 no
590 9k no*/

let creditScore = 680;
let cashOnHand = 2000;

if (creditScore >= 680 && cashOnHand >=4000) {
    console.log("Your credit is good, only 5k is needed down");
} else if (cashOnHand >=10000){
    console.log("Sorry with your credit that will be 10k down");
} else {
    console.log("you can not get A loan")
}