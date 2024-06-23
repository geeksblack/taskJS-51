/*
№1⊗jsOpBsPG

В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.

№2⊗jsOpBsPG

Передайте параметром конструктора значения этих свойств.

№3⊗jsOpBsPG

Сделайте геттеры, выводящие значения каждого из наших свойств.


*/
class Employee{
	#name;
	#age;
	#salary;
	constructor(name,age,salary) {
		this.#name = name;
		this.#age = age;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getAge() {
		return this.#age;
	}
	getSalary() {
		return this.#salary;
	}

}
let employee = new Employee('Yuriy',22,'2000$');
console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());