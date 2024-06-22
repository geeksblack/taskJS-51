/* 
Для элемента заданы следующие стили:

#elem {
	font-size: 2em;
}
По клику на кнопку выведите размер шрифта элемента.
*/ 
// Рішення:
document.addEventListener('click', function () {
	let elem = document.querySelector('#elem');
	let computedStyles=getComputedStyle(elem);
	console.log(computedStyles.fontSize);
})
