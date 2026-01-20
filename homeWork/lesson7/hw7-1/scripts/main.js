//#XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, "Oleksandr", "Kovalchuk", "oleksandr.kovalchuk@gmail.com", "+380501234567"),
    new User(2, "Iryna", "Melnyk", "iryna.melnyk@gmail.com", "+380631112233"),
    new User(3, "Andrii", "Shevchenko", "andrii.shevchenko@gmail.com", "+380671234890"),
    new User(4, "Nataliia", "Bondarenko", "nataliia.bondarenko@gmail.com", "+380991112244"),
    new User(5, "Dmytro", "Tkachenko", "dmytro.tkachenko@gmail.com", "+380931234555"),
    new User(6, "Olena", "Kravchenko", "olena.kravchenko@gmail.com", "+380681111999"),
    new User(7, "Viktor", "Petrenko", "viktor.petrenko@gmail.com", "+380951234321"),
    new User(8, "Mariia", "Romaniuk", "mariia.romaniuk@gmail.com", "+380661112266"),
    new User(9, "Yurii", "Savchenko", "yurii.savchenko@gmail.com", "+380731234987"),
    new User(10, "Anastasiia", "Lysenko", "anastasiia.lysenko@gmail.com", "+380981234654")
];

console.log(users);

//#2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
let evenIdUsers = users.filter(user => user.id % 2 === 0);
console.log(evenIdUsers);

//#pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.sort((a, b) => a.id - b.id);

console.log(sortedUsers);