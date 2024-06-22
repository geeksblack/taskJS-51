// Дана также кнопка. По клику на кнопку выведите размер шрифта дива без единиц измерения.



document.addEventListener('click', function () {
    let elem = document.getElementById('elem');
    let style = getComputedStyle(elem);
    console.log('font-size: '+parseFloat(style.fontSize));
})

