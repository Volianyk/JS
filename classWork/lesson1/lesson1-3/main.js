let age = prompt("enter your age");
//console.log(age, typeof age);
if (age >= 18) {
    console.log(`adult`);
} else {
    console.log(`cartoon`)
}

let obj = {
    id: 1,
    name: `oleg`,
    age: 19
}
let acces = obj.age > 18 ? true : false;
console.log(acces);