/*
Перепишите код через изученное свойство:

elem.style.width  = '100px';
elem.style.height = '100px';
elem.style.margin = '10px auto';
elem.style.color  = 'red';

*/ 
// Рішення:
let elem = document.getElementById('elem');
elem.style.cssText =`
	width: 100px;
	height: 100px;
    color:red;
	margin:10px auto;
	`