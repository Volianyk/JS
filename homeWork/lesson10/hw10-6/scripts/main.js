//#kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const table = document.getElementById("table");
const tableSetter = document.forms['tableSetter'];

tableSetter.onsubmit = function (e) {
    table.innerText = '';
    e.preventDefault();
    const linesValue = +tableSetter.lines.value;
    const cellsValue = +tableSetter.cells.value;
    const contentValue = tableSetter.content.value;
    console.log(linesValue, cellsValue, contentValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = contentValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
