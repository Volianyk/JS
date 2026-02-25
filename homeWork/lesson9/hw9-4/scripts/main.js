//– Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
for (const course of coursesArray) {

    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    courseDiv.classList.add('noto-sans-mono-font');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = course.title;

    const durationDiv = document.createElement('div');
    durationDiv.classList.add('duration');

    const monthDiv = document.createElement('div');
    monthDiv.classList.add('month');
    monthDiv.textContent = `Month: ${course.monthDuration}`;

    const hourDiv = document.createElement('div');
    hourDiv.classList.add('hour');
    hourDiv.textContent = `Hour: ${course.hourDuration}`;

    durationDiv.append(monthDiv, hourDiv);

    const modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules');

    const ul = document.createElement('ul');

    for (const module of course.modules) {

        const li = document.createElement('li');
        li.textContent = module;

        ul.appendChild(li);
    }

    modulesDiv.appendChild(ul);

    courseDiv.append(titleDiv, durationDiv, modulesDiv);

    document.body.appendChild(courseDiv);
}