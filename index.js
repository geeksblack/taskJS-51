/* 
Для элемента заданы следующие стили:

#elem {
	width: 200px;
	height: 200px;
}
По клику на кнопку выведите ширину и высоту элемента.
*/ 
// Рішення:
document.addEventListener('click', function () {
	let elem = document.querySelector('#elem');
	let computedStyle = getComputedStyle(elem);
	console.log(computedStyle.height, computedStyle.width);
})
