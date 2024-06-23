/*
Добавьте сеттеры свойств в ваш класс Employee.

*/
class Employee{
	#name;
	#age;
	#salary;
	setName(name) {
		this.#name = name;	
	}
	setAge(age) {
		if (age > 0 && age < 120) {
			this.#age = age;
		} else {
			throw new Error('age is incorrect');
		}
			
	}
	setSalary(salary) {
			this.#salary = salary;
		
	}
	getName() {
		return this.#name;
	}
	getAge() {
		return this.#age;
	}
	getSalary() {
		return this.addSign(this.#salary);
	}
    addSign(num) {
		return num + '$';
	}
}
let employee = new Employee;
employee.setName('Yuriy');
employee.setAge(22);
employee.setSalary('2000');
console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());