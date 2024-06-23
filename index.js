// В следующем коде сделайте вспомогательный метод приватным:


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
let employee = new Employee('Max', '1500');
console.log(employee.getSalary());