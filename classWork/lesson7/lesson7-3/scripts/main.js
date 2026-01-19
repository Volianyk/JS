class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello my name is ${this.name}`;
    }
}

let user = new User('Oleg', 32);
console.log(user);
console.log(user.greeting());