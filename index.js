/*
№1⊗jsOpIhOChM

В классе Employee сделайте геттер и сеттер зарплаты.

№2⊗jsOpIhOChM

Проверьте, что в классе Employee работают как его родные методы, так и унаследованные.


*/
class User{
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}
class Employee extends User{
	setSalary(salary) {
		this.salary = salary;
	}
	getSalary() {
		return this.salary;
	}
}
let employee = new Employee;
employee.setName('Yuriy');
employee.setSalary('2000$');
let name = employee.getName();
let salary = employee.getSalary();
console.log(name, salary);