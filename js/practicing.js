// const student = {
//     ID: '21',
//     name: 'Jhon',
//     GPA: '3.0',
// };
//
// const id = student.ID;
// const name = student.name;
// const GPA = student.GPA;
//
// console.log(id);
// console.log(name);
// console.log(GPA);
//
const person = { name: "Jhon"};
const student = { ID: "21", GPA: "3.0"};

const new_object = { ...person, ...student, semester: '3'};
console.log(new_object);