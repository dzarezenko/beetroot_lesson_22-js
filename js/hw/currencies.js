// 6) Написать конвертор валют. 
// Пользователь вводит количество USD, выбирает, 
// в какую валюту хочет перевести EUR, UAN или AZN, 
// и получает в ответ соответствующую сумму.

let amount = parseInt(prompt("Enter an amount"))
let currency = prompt("Enter a currency")

const EURO = {
  title: "EUR",
  rate: 0.9,
};
const HRIVNA = {
  title: "UAH",
  rate: 24.15,
};
const MANAT = {
  title: "AZN",
  rate: 1.7,
};

if (currency == EURO.title ) {
    alert(amount * EURO.rate)
} else if (currency == HRIVNA.title) {
    alert(amount * HRIVNA.rate)
} else if (currency == MANAT.title) {
    alert(amount * MANAT.rate)
} else if (currency != "" ) {
    alert("We do not have this currency")
} 