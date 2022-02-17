/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  },
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
var name = 'Hector';
var email = 'mejiah6060@gmail.com';
var languages = ['html', 'css', 'javascript'];

// TODO: rewrite the object literal using object property shorthand
// assigning to the end of the array 'users'. it know to assign it to the end of the array using users.push and also based off the index
users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => emails.push(user.email));

console.log(emails)
users.forEach((user) => names.push(user.name));

console.log(names)
// const sayHello = function (name) {
//   return 'Hello, ' + name + '!';
// }

// same as
// const sayHello = name => 'Hello, ' + name + '!';
//
// console.log(sayHello("55"));

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const {name, email, languages} = user;
  console.log(name)
  // new way
  // const person = {name: 'codeup', age: 4};
  // const {name, age} = person;
  // console.log(name); // 'codeup'
  // console.log(age); // 4
  // TODO: rewrite the assignment below to use template strings
  developers.push('${name} 'email is ' ${email}. ${name} ' knows '  ${languages}.join(', ')')

});
   developers.push('${name}s email is ${email}');
// const namer = 'codeup';
// console.log(`Hello, ${namer.toUpperCase()}!`); // Hello, CODEUP!

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop

  for (const developer of developers) {
    console.log(developer);

  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
}
list += '</ul>';
