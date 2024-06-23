/*
Расскажите, каким будет результат сравнения в следующем коде:


*/
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let emp1 = new Employee('john');
// let emp2 = new Employee('eric');

// console.log(emp1 === emp2);
// результат зрівняння буде false адже ми отримуємо ссилку на два різних обєкти
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let emp1 = new Employee('john');
// let emp2 = new Employee('eric');

// console.log(emp1 === emp1);
// результат зрівняння буде false адже ми отримуємо ссилку на то й же обєкт
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let emp1 = new Employee('john');
// let emp2 = new Employee('john');

// console.log(emp1 === emp2);
// результат зрівняння буде false адже ми отримуємо ссилку на два різних обєкти
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let emp1 = new Employee('john');
// let emp2 = new Employee('eric');

// console.log(emp1 !== emp1);
// результат зрівняння буде false адже ми зрівнюємо з протилежним знаком
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let emp1 = new Employee('john');
// let emp2 = emp1;

// console.log(emp1 === emp2);
// результат буде true тому що ми переписали дану зміну;
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let emp1 = new Employee('john');
// let emp2 = new Employee('eric');

// console.log(emp1 !== emp2);
// результат буде true тому що ми заперечуємо рівність даних змін;
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let emp1 = new Employee('john');
// let emp2 = emp1;
// emp2.name = 'eric';

// console.log(emp1 === emp2);
//  результат буде true тому що ми зрівнюємо рівність даних змін;