/*
№1⊗jsOpIhPrP

Дан следующий класс-родитель:

class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}
Сделайте класс Employee, который будет наследовать от этого родителя.

№2⊗jsOpIhPrP

Создайте объект класса Employee и вызовите унаследованные сеттеры и геттеры.

№3⊗jsOpIhPrP

В классе Employee сделайте следующий метод:

getFull() {
	return this.#name + ' ' + this.#surn;
}
Убедитесь, что код метода приведет к ошибке.

*/
class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}
class Employee extends User{
getFull() {
	return this.#name + ' ' + this.#surn;
}
}
let employee = new Employee;
employee.setName('Yuriy');
employee.setSurn('Vysotskyi');
let name = employee.getName();
let surn = employee.getSurn();
console.log(name, surn);