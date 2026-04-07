//#ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const forms = document.forms.myForm;
forms.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = forms.name.value;
    const surnameValue = forms.surname.value;
    const ageValue = forms.age.value;
    const result = document.getElementById('result');
    result.textContent = `Ім'я: ${nameValue}, Прізвище: ${surnameValue}, Вік: ${ageValue}`;
});

//#2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');

let value = ++localStorage.counter || 1;

counter.textContent = "Кількість: " + value;

resetBtn.onclick = () => {
    localStorage.counter = 0;
    counter.textContent = "Кількість: 0";
};
