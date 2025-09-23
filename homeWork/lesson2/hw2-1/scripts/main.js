//Усі завдання по масивах

//#67kfznmiMl
//– Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, "dot", true, false, "5", {value: 78}, [41], null, -43, undefined];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

//#LARqoUj5I
//– Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
let bookOne = {
    title: "Book One", pageCount: 245, genre: "Fantasy"
}
let bookTwo = {
    title: "Book Two", pageCount: 705, genre: "Historical Fiction"
}
let bookThree = {
    title: "Book Three", pageCount: 341, genre: "Horror"
}
console.log(bookThree)

//#sA3Gg1sCp
//– Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється масивом. Кожен автор має поля name та age.
let bookFantasy = {
    title: "Book One", pageCount: 245, genre: "Fantasy", authors: [{name: "Oleg", age: 45}, {name: "Petr", age: 18}]
}
let bookHistorical = {
    title: "Book Two",
    pageCount: 705,
    genre: "Historical Fiction",
    authors: [{name: "Oleg", age: 45}, {name: "Petr", age: 18}]
}
let bookHorror = {
    title: "Book Three", pageCount: 341, genre: "Horror", authors: [{name: "Oleg", age: 45}, {name: "Petr", age: 18}]
}
console.log(bookFantasy)

//#jCHFnEbdmFd
//– Створити масив з 10 об’єктами, які описують сутніcть “користувач”.
// Поля: name, username, password. Вивести в консоль пароль кожного користувача
let users = [{
    name: 'Oleg', username: 'userol', password: 'userol1234!'
}, {
    name: 'Petr', username: 'userpt', password: 'petr1234!'
}, {
    name: 'Stepan', username: 'userst', password: 'stepan1234!'
}, {
    name: 'Tom', username: 'usertm', password: 'tom1234!'
}, {
    name: 'Nik', username: 'usernk', password: 'nik1234!'
}, {
    name: 'Merry', username: 'usermr', password: 'merryl1234!'
}, {
    name: 'Sem', username: 'usersm', password: 'sm1234!'
}, {
    name: 'Max', username: 'usermx', password: 'max1234!'
}, {
    name: 'Jon', username: 'userjn', password: 'jon1234!'
}, {
    name: 'Bloo', username: 'userbl', password: 'bloo1234!'
}];
users.forEach(user => console.log(user.password));
for (let i = 0; i < users.length; i++) {
    console.log(users[i].password);
}

//#coYydZuaeEB
//– описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
const weekTemperatures = [
    {day: "Monday", morningTemp: 12, dayTemp: 20, eveningTemp: 15},
    {day: "Tuesday", morningTemp: 13, dayTemp: 22, eveningTemp: 16},
    {day: "Wednesday", morningTemp: 11, dayTemp: 18, eveningTemp: 14},
    {day: "Thursday", morningTemp: 10, dayTemp: 17, eveningTemp: 13},
    {day: "Friday", morningTemp: 14, dayTemp: 23, eveningTemp: 18},
    {day: "Saturday", morningTemp: 15, dayTemp: 24, eveningTemp: 19},
    {day: "Sunday", morningTemp: 12, dayTemp: 21, eveningTemp: 16}
];
console.log(weekTemperatures[0].day);
console.log(weekTemperatures[0].morningTemp);
