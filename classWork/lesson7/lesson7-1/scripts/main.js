function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wifeName = {name:wifeName,age:wifeAge};
    console.log(this)
}

let user1 = new User('Petr', 32, true, 'anna', 31);