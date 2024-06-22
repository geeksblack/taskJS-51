// Дана также кнопка. По клику на кнопку выведите размер шрифта дива без единиц измерения.
// Объясните, в чем ошибка в следующем коде:

<div style="font-size: 16px;">
	text
</div>
let elem = document.querySelector('div');
elem.style.fontSize = elem.style.fontSize + 2;



// Рішення:
let elem = document.querySelector('div');
let fontSize = elem.style.fontSize;
let changefontSize = parseInt(fontSize);
elem.style.fontSize = (changefontSize + 2) + "px";
console.log(elem.style.fontSize);