//#jeBqHV525U5
// – Є масив
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('wrapper');
    div.textContent = `${course.title} ${course.monthDuration}`;
    document.body.appendChild(div);
}

//#Kx1xgoKy8
// – Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = course.title;
    const p = document.createElement('p');
    p.innerText = `${course.monthDuration} months`;
    div.classList.add('wrapperSecond');
    div.classList.add('sour-gummy-font');
    div.append(h1, p);
    document.body.appendChild(div);
}