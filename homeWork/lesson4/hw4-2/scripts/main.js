//#59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph('Текст задати через аргумент');

//#hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function createUl(li) {
    document.write(`<ul>
             <li>${li}</li>
             <li>${li}</li>
             <li>${li}</li>
                   </ul>`);
}

createUl('Текст li задати через аргумент всім однаковий');

//#0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function createUlList(liText, liNumber) {
    document.write('<ul>');
    for (let i = 0; i < liNumber; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write('</ul>');
}

createUlList('Кількість li визначається другим аргументом, який є числовим ', 7);

//#gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function arrayWriter(array) {
    document.write('<ul>');
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write('</ul>');
}

arrayWriter([1, "Petr", true, 45875]);

//

function showUsers(users) {
    for (user of users) {
        document.write(`
            <div class="show-users">
                <p><b>ID:</b> ${user.id}</p>
                <p><b>Name:</b> ${user.name}</p>
                <p><b>Age:</b> ${user.age}</p>
            </div>
        `);
    }
}

const usersArray = [
    {id: 1, name: 'Volodymyr', age: 25},
    {id: 2, name: 'Petr', age: 22},
    {id: 3, name: 'Oleh', age: 30}
];

showUsers(usersArray);

//#pghbnSB
// – створити функцію яка повертає найменьше число з масиву

function getMinNumber(arr) {
    let min = arr[0];
    for (let number of arr) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(getMinNumber([10, 3, 6, 1, 8]));

//#EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumOfArrayElements(arr) {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total;
}

console.log(sumOfArrayElements([1, 2, 10]));

//#kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    } else {
        return "Incorrect number of elements";
    }
}

console.log(swap([11, 22, 33, 44], 2, 1));