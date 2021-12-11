console.log('Hello from JavaScript!');

alert("Welcome to my Website!");

let userInput = prompt('What is your favorite color:');
console.log('The user entered: ' + userInput);
if (userInput.toLowerCase() == userInput) {
    alert("Great, " + userInput + " is my favorite color too!" );
}
let selectedTime = prompt("To enroll in the class, what time are you available? Please type a time if any " + "time between 10am, 11am, 12pm.");
if (selectedTime >= 12 || selectedTime < 10) {
    alert("sorry please choose an earlier time")
}   else
        alert("Congrats")
