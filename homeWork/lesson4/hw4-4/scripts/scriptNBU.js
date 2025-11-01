//онлайн калькулятор валют, курс бере з нбу, при написанні користувався ШІ
async function calculate() {
    const sumUAH = parseFloat(document.getElementById('sumUAH').value);
    const exchangeCurrency = document.getElementById('currency').value;
    const output = document.getElementById('result');

    if (!sumUAH || sumUAH <= 0) {
        output.textContent = 'Введіть суму у гривнях!';
        return;
    }

    try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const data = await response.json();

        const currency = data.find(item => item.cc === exchangeCurrency);
        if (!currency) {
            output.textContent = ' Валюта не знайдена.';
            return;
        }

        const result = sumUAH / currency.rate;
        output.textContent = `Ви отримаєте ${result.toFixed(2)} ${exchangeCurrency}
    (курс: ${currency.rate.toFixed(2)} грн)`;

    } catch (error) {
        output.textContent = 'Помилка підключення до серверу НБУ.';
        console.error(error);
    }
}