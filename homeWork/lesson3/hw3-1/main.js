//#y7crMeFwHcS
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`<div>div block</div>`);
}

//#TYj7ncx
//– За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`<div>Section #${i}</div>`);
}

//#uzkt71dp
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 1;
while (i <= 20) {
    document.write(`<h1>Home wok</h1>`);
    i++;
}

//#OeT7t3uUMFi
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
{
    let i = 1;
    while (i <= 20) {
        document.write(`<h1>Home wok number: ${i}</h1>`);
        i++;
    }
}