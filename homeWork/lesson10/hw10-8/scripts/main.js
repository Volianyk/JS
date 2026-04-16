//#NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

const data = Array.from({length: 100}, (_, i) => ({
    id: i + 1,
    name: `Item number ${i + 1}`
}));

const list = document.getElementById("list");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageInfo = document.getElementById("pageInfo");
let page = 0;
const limit = 10;

function render() {
    list.innerHTML = '';

    const start = page * limit;
    const end = start + limit;
    const slice = data.slice(start, end);

    slice.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerText = `${item.id}. ${item.name}`;
        list.appendChild(div);
    });

    prevBtn.disabled = page === 0;
    nextBtn.disabled = end >= data.length;
    const totalPages = Math.ceil(data.length / limit);
    pageInfo.innerText = `Сторінка ${page + 1} з ${totalPages}`;
}

nextBtn.onclick = () => {
    page++;
    render();
};

prevBtn.onclick = () => {
    page--;
    render();
};

render();
