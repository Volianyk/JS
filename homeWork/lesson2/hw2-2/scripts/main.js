// Завдання з логічних розгалужень

//#bAUsaq6LI
//Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’.
// Перевірте скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('enter value'); // можна змінювати на 0 або -3

if (a !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

//#3ckURgvs
//– Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
let time = +prompt('enter time');

if (time >= 0 && time < 15) {
    console.log("1-ша чверть години");
} else if (time >= 15 && time < 30) {
    console.log("2-га чверть години");
} else if (time >= 30 && time < 45) {
    console.log("3-тя чверть години");
} else if (time >= 45 && time < 60) {
    console.log("4-та чверть години");
} else {
    console.log("Некоректне значення");
}

//#UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('enter day date');

if (day >= 1 && day <= 10) {
    console.log("Перша декада місяця");
} else if (day >= 11 && day <= 20) {
    console.log("Друга декада місяця");
} else if (day >= 21 && day <= 31) {
    console.log("Третя декада місяця");
} else {
    console.log("Некоректне значення дня");
}

//#KzrtqyQ
// – Скласти розклад на тиждень за допомогою switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа,
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = +prompt('Enter the number of a day of the week');

switch (dayNumber) {
    case 1:
        console.log("Monday – Study JavaScript");
        break;
    case 2:
        console.log("Tuesday – Do sports");
        break;
    case 3:
        console.log("Wednesday – Read a book");
        break;
    case 4:
        console.log("Thursday – Work on project");
        break;
    case 5:
        console.log("Friday – Meet with friends");
        break;
    case 6:
        console.log("Saturday – Relax and watch movies");
        break;
    case 7:
        console.log("Sunday – Family day");
        break;
    default:
        console.log("Invalid day number (enter 1–7)");
}

//#uwsz1RnTQJ1
//– Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати, коли введені рівні числа.
let numberA = +prompt("Enter first number");
let numberB = +prompt("Enter second number");
if (numberA > numberB) {
    console.log(numberA)
} else if (numberA === numberB) {
    console.log('Numbers A and B are equal')
} else {
    console.log(numberB)
}

//#iBvqtjEm
//– є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код, який буде присвоювати змінній х значення “default”,
// якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x = 0;
if (x === 0 || x === null || x === undefined || x === NaN || x === '') {
    x = 'default';
}
if (!x) {
    x = 'default';
}