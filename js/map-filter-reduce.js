const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//#2
// var newArray = users.filter(function (user)
//     {
//         return user.languages.length >= 3;
//     }
// );
// console.log(newArray)
// //#3
// let addresses = users.map(function(user){
//     return user.email
// })
// console.log(addresses)
// //#4

let sumOfYears = users.map(users => users.yearsOfExperience).reduce((prev, next) => prev + next);
console.log(sumOfYears / users.length)

// //#5
// let longestEmail = addresses.reduce((longest, current) => {
//     return current.length > longest.length ? current: longest;
// });
// console.log(longestEmail)
//
// //#6
// let userNames = users.map(function(users, name) {
//     return users.name;
// })
// console.log('Your instructors are: ' + userNames.reduce(((prev, next) => prev + ', ' + next)) + '.')
// // console.log('Your instructors are : ${userNames.reduce(((prev, next) => prev + ', ' + next))}.')