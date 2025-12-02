//#bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];

for (const suit of suits) {
    for (const value of values) {

        let color;
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        } else {
            color = 'black';
        }

        cards.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    }
}

console.log(cards);

// used AI to complete function renderCards()
function renderCards(cardsArray) {
    const container = document.createElement('div');
    container.classList.add('cards-container');
    document.body.appendChild(container);

    for (const card of cardsArray) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', card.color);

        cardDiv.innerHTML = `
            <div>${card.value.toUpperCase()}</div>
            <div>${card.cardSuit}</div>
        `;

        container.appendChild(cardDiv);
    }
}

renderCards(cards);

//  – знайти піковий туз
const spadeAceArray = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAceArray);
renderCards(spadeAceArray);

//  – всі шістки
const allSixes = cards.filter(card => card.value === '6');
console.log(allSixes);
renderCards(allSixes);

//  – всі червоні карти
const redCards = cards.filter(card => card.color === 'red');
console.log(redCards);
renderCards(redCards);

//  – всі буби
const diamonds = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);
renderCards(diamonds);

//  – всі трефи від 9 та більше
const clubs9plus = cards.filter(card =>
    card.cardSuit === 'clubs' &&
    ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);
console.log(clubs9plus);
renderCards(clubs9plus);

//#EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const suitMap = {
    spade: 'spades',
    diamond: 'diamonds',
    heart: 'hearts',
    clubs: 'clubs'
};


const groupedBySuit = cards.reduce((acc, card) => ({
    ...acc,
    [suitMap[card.cardSuit]]: [...(acc[suitMap[card.cardSuit]] || []), card]
}), {});

console.log(groupedBySuit);
renderCards(groupedBySuit.spades);
renderCards(groupedBySuit.diamonds);
renderCards(groupedBySuit.hearts);
renderCards(groupedBySuit.clubs);

