let user = {
    name: "Johan",
    skills: ['html', 'javascript'],
}
// console.log(user)
//
// let userClone={...user};
// console.log(userClone===user);
// console.log(userClone.skills===user.skills); // поверхнева копія

let userClone = JSON.stringify(user);
console.log(userClone);

let parse = JSON.parse(userClone);
console.log(parse);

console.log(userClone === user);