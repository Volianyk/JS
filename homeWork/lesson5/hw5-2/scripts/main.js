//#59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
const createParagraph = text => document.write(`<p>${text}</p>`);
createParagraph('Текст задається через аргумент');

//#hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
let createUl = (text, count) => {
    document.write('<ul>');
    Array.from({length: count}).forEach(() => document.write(`<li>${text}</li>`));
    document.write('</ul>');
};

createUl('Текст li задається через аргумент', 3);

//#0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
let createUlList = (text, count) => {
    document.write('<ul>');
    Array.from({length: count}).forEach(() => document.write(`<li>${text}</li>`));
    document.write('</ul>');
};

createUlList('Кількість li визначається другим аргументом, який є числовим', 3);

//#gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
let arrayWriter = array => {
    document.write('<ul>');
    array.forEach(item => document.write(`<li>${item}</li>`));
    document.write('</ul>');
};
arrayWriter([1, "Petr", true, 45875]);

//#bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id, name, age,
// та виводить їх в документ. Для кожного об’єкту окремий блок.
let showUsers = users => {
    users.forEach(user => {
        document.write(`
            <div class="show-users">
                <p><b>ID:</b> ${user.id}</p>
                <p><b>Name:</b> ${user.name}</p>
                <p><b>Age:</b> ${user.age}</p>
            </div>
        `);
    });
};

const usersArray = [
    {id: 1, name: 'Volodymyr', age: 25},
    {id: 2, name: 'Petr', age: 22},
    {id: 3, name: 'Oleh', age: 30}
];

showUsers(usersArray);

//#pghbnSB
// – створити функцію яка повертає найменьше число з масиву

let getMinNumber = arr => Math.min(...arr);
console.log(getMinNumber([10, 3, 6, 2, 8]));

//#EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumOfArrayElements = (arr) => arr.reduce((sum, num) => sum + num, 0);

console.log(sumOfArrayElements([4, 2, 10]));

//#kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, i, j) => i < arr.length && j < arr.length ? ([arr[i], arr[j]] = [arr[j], arr[i]], arr) : "Incorrect number of elements";

console.log(swap([11, 22, 33, 44], 2, 1));

