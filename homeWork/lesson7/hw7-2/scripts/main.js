//#nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(1, "Oleksandr", "Kovalchuk", "oleksandr.kovalchuk@gmail.com", "+380501234567",
        new Product("TV", 7800),
        new Product("Phone", 12000),
    ),

    new Client(2, "Iryna", "Melnyk", "iryna.melnyk@gmail.com", "+380631112233",
        new Product("Laptop", 28000)
    ),

    new Client(3, "Andrii", "Shevchenko", "andrii.shevchenko@gmail.com", "+380671234890",
        new Product("Tablet", 14000),
        new Product("Headphones", 3200),
        new Product("Phone Case", 600),
        new Product("Charger", 700)
    ),

    new Client(4, "Nataliia", "Bondarenko", "nataliia.bondarenko@gmail.com", "+380991112244",
        new Product("Monitor", 9000),
        new Product("Keyboard", 1600),
        new Product("Mouse", 850),
        new Product("Tripod", 1800),
    ),

    new Client(5, "Dmytro", "Tkachenko", "dmytro.tkachenko@gmail.com", "+380931234555",
        new Product("Camera", 22000),
        new Product("Memory Card", 1200)
    ),

    new Client(6, "Olena", "Kravchenko", "olena.kravchenko@gmail.com", "+380681111999",
        new Product("Smartwatch", 6500),
        new Product("Screen Protector", 400)
    ),

    new Client(7, "Viktor", "Petrenko", "viktor.petrenko@gmail.com", "+380951234321",
        new Product("Printer", 7500),
        new Product("Paper", 400),
        new Product("Ink", 1200),
        new Product("Backpack", 2000),
        new Product("Mouse", 1000)
    ),

    new Client(8, "Mariia", "Romaniuk", "mariia.romaniuk@gmail.com", "+380661112266",
        new Product("Laptop", 32000),
    ),

    new Client(9, "Yurii", "Savchenko", "yurii.savchenko@gmail.com", "+380731234987",
        new Product("Game Console", 18000),
        new Product("Gamepad", 2500),
        new Product("Lamp", 1300)
    ),

    new Client(10, "Anastasiia", "Lysenko", "anastasiia.lysenko@gmail.com", "+380981234654",
        new Product("E-book Reader", 5200),
        new Product("Cover", 900),
    )
]

console.log(clients);

//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);

console.log(sortedClients);