// Дана также кнопка. По клику на кнопку выведите размер шрифта дива без единиц измерения.
// Объясните, в чем ошибка в следующем коде:
let elem = document.querySelector('div');
elem.style.fontSize = parseInt(elem.style.fontSize) + 2 + 'em';

// Рішення:
let elem = document.querySelector('div');
elem.style.fontSize = parseFloat(elem.style.fontSize) + 2 + 'em';
console.log(elem.style.fontSize)
