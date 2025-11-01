//#I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

function square(aNum, bNum) {
    return aNum * bNum;
}

console.log(square(25, 4));

//#ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function roundSquare(radius) {
    return Math.PI * Math.pow(radius, 2);
}

console.log(roundSquare(25,));

//#Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderArea(rNum, hNum) {
    return 2 * Math.PI * rNum * (rNum + hNum);
}

console.log(cylinderArea(5, 10));

//#SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

function arrayReader(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

arrayReader([1, 2, 3, 5, 78]);