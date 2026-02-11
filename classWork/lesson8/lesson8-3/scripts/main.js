let base = {
    id: 1,
    name: 'petr'
}
let copy = Object.create(base);
copy.surname = 'Patyka'
console.log(base);
console.log(copy);
console.log(copy.hasOwnProperty('name'));
copy.id = 12;
console.log(copy.hasOwnProperty('id'));

Object.defineProperty(base, 'id',
    {
        value: 2324,
        writable: false,
        enumerable: false,
        configurable: true,
    })
console.log(base);