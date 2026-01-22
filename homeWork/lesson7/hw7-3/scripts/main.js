//#vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (newMaxSpeed) {
        if (newMaxSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newMaxSpeed;
        }
    };

    this.changeYear = function (newValue) {
        if (newValue > 1815) {
            this.year = newValue;
        }
    };

    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}

let car = new Car('Soul', 'Kia', 2017, 180, 2);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2015);
car.addDriver({name: 'Oleg', age: 20});
console.log(car);