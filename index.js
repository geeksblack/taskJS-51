/*
№1⊗jsOpIhOPM

В классе Employee сделайте геттер и сеттер возраста.

№2⊗jsOpIhOPM

В классе Employee переопределите сеттер возраста и сделайте в нем проверку на то, что возраст от 18 до 65 лет.

*/
class User{
	setAge(age) {
		this.age = age;
	} 
	getAge() {
		return this.age;
	}
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}
class Employee extends User{
	setAge(age) {
		if (age > 18 && age < 65) {
			this.age = age;
		} else {
			throw new Error('age is incorrect');
		}
	}
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
employee.setAge(22);
let name = employee.getName();
let salary = employee.getSalary();
let age = employee.getAge();
console.log(name, salary,age);