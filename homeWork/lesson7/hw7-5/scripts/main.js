//#zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella("Anna", 18, 36),
    new Cinderella("Maria", 19, 37),
    new Cinderella("Olena", 20, 38),
    new Cinderella("Kateryna", 21, 39),
    new Cinderella("Sofia", 22, 35),
    new Cinderella("Iryna", 23, 40),
    new Cinderella("Natalia", 24, 41),
    new Cinderella("Oksana", 25, 36.5),
    new Cinderella("Yulia", 26, 37.5),
    new Cinderella("Daria", 27, 38.5),
];

const prince = new Prince('Tomas', 32, 37);

for (const sinderella of cinderellas) {
    if (sinderella.footSize === prince.slipper) {
        prince.wife = sinderella;
        console.log(prince);
    }
}

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
console.log(cinderellaMain);