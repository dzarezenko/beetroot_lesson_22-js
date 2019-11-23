// 6) Написать конвертор валют. 
// Пользователь вводит количество USD, выбирает, 
// в какую валюту хочет перевести EUR, UAN или AZN, 
// и получает в ответ соответствующую сумму.

let amount = parseInt(prompt("Enter an amount"))
let currency = prompt("Enter a currency")

// API object
let currencies = [
  {
    title: "EUR",
    rate: 0.9,
  },
  {
    title: "UAH",
    rate: 24.15,
  },
  {
    title: "AZN",
    rate: 1.7,
  },
  {
    title: "XXX",
    rate: 1.2345,
  },
];

for (let key in currencies) {
  if (currency == currencies[key].title) {
    alert(amount * currencies[key].rate);
    break;
  }
}
