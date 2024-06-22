/*
Передайте в конструктор класса Employee имя и зарплату работника.
№1⊗jsOpBsPP

В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.

№2⊗jsOpBsPP

Передайте параметром конструктора значения этих свойств.

№3⊗jsOpBsPP

Сделайте метод, который выведет данные работника.

*/
class Employee {
	#name;
	#age;
	#salary;
	constructor(name,age,salary) {
		this.#name = name;
		this.#age = age;
		this.#salary = salary;
	}
	showName() {
		return this.#name;
	}
	showAge() {
		return this.#age;
	}
	showSalary() {
		return this.#salary;
	}

}
let employee = new Employee('Yuriy', 22, '2000$');
console.log(employee.showName());
console.log(employee.showAge());
console.log(employee.showSalary());