//#sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const button = document.getElementById('btn');
button.onclick = function () {
    const div = document.getElementById('text');
    div.style.display = 'none';
}


//#j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
// та повідомити про це користувача
const btn = document.getElementById('checkBtn');

btn.addEventListener('click', () => {
    const age = document.getElementById('age').value;
    const result = document.getElementById('result');

    if (age < 18) {
        result.textContent = "Вам менше 18 років";
    } else {
        result.textContent = "Вам 18 або більше років";
    }
});