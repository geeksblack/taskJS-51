// Дана также кнопка. По клику на кнопку выведите толщину границы, ее тип и цвет.
// Рішення:
document.addEventListener('click', function () {
	let elem = document.querySelector('div');
	console.log(elem.style.border)
})