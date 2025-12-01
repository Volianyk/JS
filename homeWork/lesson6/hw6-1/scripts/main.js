//#dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

let s1 = 'hello world';
console.log(s1.length);
let s2 = 'lorem ipsum';
console.log(s2.length);
let s3 = 'javascript is cool';
console.log(s3.length);

//#8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
//‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
let s1Up = s1.toUpperCase();
console.log(s1Up);
let s2Up = s2.toUpperCase();
console.log(s2Up);
let s3Up = s3.toUpperCase();
console.log(s3Up);

//#ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//  ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
let s1Low = s1Up.toLowerCase();
console.log(s1Low);
let s2Low = s2Up.toLowerCase();
console.log(s2Low);
let s3Low = s3Up.toLowerCase();
console.log(s3Low);

//#0b89BkYZwu
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
let strDirty = ` dirty string   `;
let strClean = strDirty.trim();
console.log(strClean);
console.log(strDirty.length);
console.log(strClean.length);

//#bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
function stringToArray(str) {
    if (str) {
        return str.trim().split(/\s+/);
    }
    return ``;
}

let arr = stringToArray(`Ревуть воли як ясла повні`);
console.log(arr);

//#Rbr5kEQ
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
const numbersArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const stringArray = numbersArray.map(num => String(num));
console.log(numbersArray);
console.log(stringArray);
