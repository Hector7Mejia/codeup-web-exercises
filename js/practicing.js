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