function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wifeName = {name: wifeName, age: wifeAge};
    console.log(this)
}

//console.log(User);
User.prototype.greeting = function (msg) {
    return `${msg} Hello! my name is ${this.name}`;
}

let user = new User('Oleg', 12);
//console.log(user.greeting());

let user2 = new User('Petr', 13);
//console.log(user.greeting.apply(user2, ['111']));

let greetingCopy = user.greeting.bind(user2, '2323');
console.log(greetingCopy());