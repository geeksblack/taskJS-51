class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
		this.#addSign();
	}
	
	getSalary() {
		return this.#addSign(this.salary);
	}
	
	#addSign(num) {
		return num + '$';
	}
}
let employee = new Employee('Yuriy', '2000');
console.log(employee.getSalary());