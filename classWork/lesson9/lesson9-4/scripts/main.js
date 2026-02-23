// let h2 = document.createElement('h2');
// h2.innerText = 'Hello World!';
// document.body.appendChild(h2);

let allUsersDiv = document.getElementsByClassName('users')[0];
let users = [
    {name: 'string', age: 10, status: true},
    {name: 'dfd', age: 11, status: false},
    {name: 'stxgrsring', age: 12, status: false},
    {name: 'st234ring', age: 13, status: true},
    {name: 'str85gding', age: 14, status: true}
];

for (const user of users) {
    let div = document.createElement('div');
    div.classList.add('user');
    div.innerText = user.name;
    allUsersDiv.appendChild(div);
}