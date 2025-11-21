//#I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

let square = (aNum, bNum) => aNum * bNum;
console.log(square(25, 4));

//#ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

let roundSquare = (radius) => Math.PI * Math.pow(radius, 2);
console.log(roundSquare(10,));

//#Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let cylinderArea = (rNum, hNum) => 2 * Math.PI * rNum * (rNum + hNum);
console.log(cylinderArea(5, 10));

//#SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let arrayReader = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
arrayReader([1, 2, 3, 5, 78]);