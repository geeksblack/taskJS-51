// Дана также кнопка. По клику на кнопку выведите ширину и высоту дива без единиц измерения.



document.addEventListener('click', function () {
    let elem = document.getElementById('elem');
    let style = getComputedStyle(elem);
    console.log('width: '+parseInt(style.width) +', height: '+parseInt(style.height));
})

