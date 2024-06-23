// В следующем коде сделайте свойства приватными:
class Employee {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}
	
	getName() {
		return this._name;
	}
	getSalary() {
		return this._salary;
	}
}
let employee = new Employee('Yuriy', '2000$');
console.log(employee.getName());
console.log(employee.getSalary());