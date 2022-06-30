// const student = {
//     ID: '21',
//     name: 'Jhon',
//     GPA: '3.0',
// };
//const {GPA:n} = student;
// console.log(n);

// const id = student.ID;
// const name = student.name;
// const GPA = student.GPA;
//
// console.log(id);
// console.log(name);
// console.log(GPA);
// You can add new properties to an instance object any time later after its creation. True
// const person = { name: "Jhon"};
// const student = { ID: "21", GPA: "3.0"};
//
// const new_object = { ...person, ...student, semester: '3'};
// console.log(new_object);
//
// find the prime number
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//
// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
//
// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


// function myFunc(total, num) {
//     return total + num;
// }
// function calculateGPA(students) {
//
//     for (let i = 0; i < students.length; i++) {
//
//         calculatedGPA += students[i].GPA
//     }
//     console.log(calculatedGPA.reduce(myFunc));
// }
//
// console.log(calculateGPA(testArray));
//
// const arr = [
//     {id: 1, salary: 10},
//     {id: 2, salary: 20},
//     {id: 3, salary: 30},
// ];
//
// .reduce is using accumulator and object to specify what is happening to its paramater
const person = { name: "Tim"};
const student = { ID: "21", GPA: "3.0"};
// const students = { ...person, ...student, semester: '4'};
let calculatedGPA = [];
const student1 = {name: "One", ID: "1", GPA: "2.0"};
const student2 = {name: "Two", ID: "2", GPA: "4.0"};
const student3 = {name: "Three", ID: "3", GPA: "4.0"};
const student4 = {name: "Four", ID: "4", GPA: "2.4"};
let testArray1 = [student1, student2, student3, student4];
//use a hash map to solve this
function calculateGPA(testArray1) {
    if(typeof testArray1.GPA != "number") {
        testArray1.GPA.forEach(str => {
            calculatedGPA.GPA.push(Number(str));
        });
        return calculatedGPA;
    }
    //used reduce to assign and "accumulator" to the objects in testArray.GPA. Parse float takes them object and makes them into floats before adding
    const sum = testArray1.reduce((accumulator, object) => {
        return accumulator + parseFloat(object.GPA);
    }, 0);
    console.log(sum);
    console.log(sum/testArray1.length);
}

//In the following, write a program using the map function that squares the numbers in the array called notSquared. It contains random integers.

// squared = notSquared.map(toSquare => toSquare * toSquare); //write solution in place of -1

// calculateGPA(testArray1);

