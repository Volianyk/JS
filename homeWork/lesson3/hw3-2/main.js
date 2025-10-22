//#vLSZKMlO
// – Використовуючи дані з масиву, за допомоги document.write та циклу побудувати структуру за шаблоном
let listOfItems = [`html`, `css`, `javascript`, `mysql`, `mongodb`, `react`, `angular`, `node.js`];

document.write(`<ul>`)

for (const item of listOfItems) {
    document.write(`<li>${item}</li>`);
}

document.write(`</ul>`);

//#Hdjws7E
// Використовуючи дані з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон
let products = [
    {
        title: `milk`,
        price: 22,
        image: `https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg`
    },

    {
        title: `juice`,
        price: 27,
        image: `https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg`
    },

    {
        title: `tomato`,
        price: 47,
        image: `https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74`

    },

    {
        title: `tea`,
        price: 15,
        image: `https://hellotea.ua/wp-content/uploads/photo_2021-04-26_21-27-50.jpg?nocache=0.5943970666266978`
    },

];
for (const product of products) {

    document.write(` <div class="product-card">

        <h3 class="product-title">${product.title}. Price – ${product.price}</h3>

        <img src="${product.image}" alt="" class="product-image">

</div>`);
}

//#4WrHwFTEop0
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}];

for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}

for (const user of users) {
    if (!user.status) {
        console.log(user);
    }
}

for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}