// Определите, какому классу принадлежит данный тег.
// let elem = document.querySelector('div');
// console.dir(elem instanceof HTMLDivElement);

// let elems = document.querySelectorAll('div');
// console.dir(elems instanceof NodeList);

// let elem = document.querySelector('input');
// console.dir(elem instanceof HTMLInputElement
// );

let elem = document.querySelector('div');
let elems = elem.children;

console.dir(elems instanceof HTMLCollection
);