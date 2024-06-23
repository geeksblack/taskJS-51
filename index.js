/*
Перебирите созданный массив циклом и выведите на экран имена и зарплаты каждого работника.

*/
class Employee {
	#name;
	#salary;
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary() {
		return this.#salary;
	}

}
let employees = [
	new Employee('Max', 1000),
	new Employee('Yuriy',2000),
	new Employee('Nazar', 3000),
	new Employee('Andriy', 1500),
	new Employee('Sergiy', 1300),
]
for (let employee of employees) {
	console.log(employee.getName());
	console.log(employee.getSalary());
}