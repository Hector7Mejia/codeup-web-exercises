/*var movie = 1;
var daysRented = 9;

console.log(movie * daysRented)*/
/*
let google = 400
let amazon = 380
let facebook = 350
console.log(google + amazon + facebook)*/
//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
/*let classCapacity = 10
let classSize = 5
let student = "Rick"
let currentScheduleIsFree = checkIfScheduleFree(student)
if (classSize<10 && currentScheduleIsFree){
    return true;
}
function checkIfScheduleFree(student) {
    /!* Some logic here *!/
}*/

/*let notExpired
let premiumCheck
let moreThan2

    if (premiumCheck == true && notExpired)
{
    return true;
        }
    else if (!premiumCheck && moreThan2 && notExpired){
        return true;
    } else {
        return false;
    }*/
/*
Create a variable that holds a boolean value for each of the following conditions:

    the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace*/

    function functionName() {

        var username = 'codeup'.trim();
        var password = 'codeup'.trim();

        if (password.length > 4 && username.length < 21 && !username.includes(password)) {
            return true;
        }
        return false;
    }

console.log(functionName())