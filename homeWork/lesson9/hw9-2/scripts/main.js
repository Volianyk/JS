//#OPLI89c9G
// – Є масив:[‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const menu = ['Main', 'Products', 'About us', 'Contacts'];

const ul = document.createElement("ul");
ul.classList.add('menu');

for (const item of menu) {

    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add('menu-item');
    ul.appendChild(li);
}

document.body.appendChild(ul);