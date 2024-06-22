// Дан див и две кнопки. По клику на первую кнопку спрячьте див, а по клику на вторую - покажите.

// Рішення:
document.addEventListener('click', hide())
function hide() {
let elem = document.querySelector('div');
	let hide = elem.style.display = 'none';
	console.log(hide);	
}
document.addEventListener('click', show())
function show() {
	let elem = document.querySelector('div');
	let show = elem.style.display = 'block';
	console.log(show);
}