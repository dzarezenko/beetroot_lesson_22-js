// 6) Написать конвертор валют. 
// Пользователь вводит количество USD, выбирает, 
// в какую валюту хочет перевести EUR, UAN или AZN, 
// и получает в ответ соответствующую сумму.

let amount = parseInt(prompt("Enter an amount"))
let currency = prompt("Enter a currency")

const TITLE_EURO = "EUR";
const TITLE_GRIVNA = "UAN";
const TITLE_MANAT = "AZN";
const RATE_EUR = 0.90;
const RATE_UAH = 24.81;
const RATE_AZN = 1.70;

if (currency == TITLE_EURO ) {
    alert(amount * RATE_EUR)
} else if (currency == TITLE_GRIVNA) {
    alert(amount * RATE_UAH)
} else if (currency == TITLE_MANAT) {
    alert(amount * RATE_AZN)
} else if (currency != "" ) {
    alert("We do not have this currency")
} 