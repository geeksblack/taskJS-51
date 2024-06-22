// Дана также кнопка. По клику на кнопку выведите размер шрифта дива без единиц измерения.
// Объясните, в чем ошибка в следующем коде:

let elem = document.querySelector('div');
elem.style.fontSize = parseInt(elem.style.fontSize + 2) + 'px';

// Рішення:
let elem = document.querySelector('div');
elem.style.fontSize = parseInt(elem.style.fontSize ) + 2 + 'px';
console.log(elem.style.fontSize)
