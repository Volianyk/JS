//#5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
console.log('Object below created using class');

class Car {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    };

    drive() {
        console.log(`їдемо зі швидкістю ${(this.maxSpeed)} на годину`);
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(newMaxSpeed) {
        if (newMaxSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newMaxSpeed;
        }
    };

    changeYear(newValue) {
        if (newValue > 1815) {
            this.year = newValue;
        }
    };

    addDriver(driver) {
        if (driver) this.driver = driver;
    };
}

let car = new Car('Sonata', 'Hyundai', 2020, 110, 2.5);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(23);
car.changeYear(2005);
car.addDriver({name: 'Semen', age: 31});
console.log(car);