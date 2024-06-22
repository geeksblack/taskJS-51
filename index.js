/*
Передайте в конструктор класса Employee имя и зарплату работника.


*/
class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	showName() {
		return this.name;
	}
	showSalary() {
		return this.salary;
	}

}
let employee = new Employee('Yuriy', '2000$');
let incrSalary = parseInt(employee.showSalary()) + parseInt(employee.showSalary()) / 10 +'$' ;
console.log(employee.showName(), employee.showSalary())
console.log('Підвищення зарплати на 10% : '+incrSalary);
