let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// users.forEach(function (value, index) {
//     console.log(value, index);
// })

// users.forEach((value, index) => console.log(index, value));

// let filteredUsers = users.filter(function (value) {
//     return value.age > 30;
// })
// console.log(filteredUsers);
//
// let filteredUsersShort = users.filter(value => value.age > 29);
// console.log(filteredUsersShort);

// let mapedUsers = users.map(function (value, index) {
//     return newUser = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//     }
// });
// console.log(mapedUsers);

// let findUsers=users.find(value => value.name === 'oleg');
// console.log(findUsers);

// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));

// let sort = users.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(sort);

// let sort = users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// });
// console.log(sort);

console.log(users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator.statT.push(user);
    } else {
        accumulator.statF.push(user);
    }
    return accumulator;
}, {statT: [], statF: []}));
// console.log(reduce);