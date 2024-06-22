
// Рішення:
document.addEventListener('click', function () {
	let elem = document.querySelector('div');
	elem.style.width = parseInt(elem.style.width) +parseInt(elem.style.width)/10 + 'px';
	elem.style.height = parseInt(elem.style.height) +parseInt(elem.style.height)/10+ 'px';
	console.log(elem.style.height,elem.style.width)
})