/*
#6Qb97gsv
– Створити 3 змінних firstName, middleName, lastName,
наповнити їх своїм ПІБ.
З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)
*/

let firstName;
let middleName;
let lastName;

firstName = "Volodymyr";
middleName = "Volodymyrovych";
lastName = "Volianyk";

let person = `${firstName} ${middleName} ${lastName}`;

console.log(person);
