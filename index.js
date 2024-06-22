// Дан див и две кнопки. По клику на первую кнопку покрасьте цвет дива в красный цвет, а по клику на вторую - верните исходный цвет.
// Рішення:
document.addEventListener('click', color())
function color() {
let elem = document.querySelector('div');
	let color = elem.style.backgroundColor = 'red';
	console.log(color);	
}
document.addEventListener('click', none())
function none() {
	let elem = document.querySelector('div');
	let none = elem.style.backgroundColor= '';
	console.log(none);
}