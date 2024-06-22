/* 
Для элемента заданы следующие стили:

#elem {
	width: 200px;
	height: 200px;
}
По клику на кнопку увеличьте ширину и высоту элемента в два раза.
*/ 
// Рішення:
document.addEventListener('click', function () {
	let elem = document.querySelector('#elem');
	elem.style.setProperty('height', '400px');
	elem.style.setProperty('width', '400px');
	console.log(elem);
})
