/*
Пусть класс Employee наследует от класса User из данного урока.

№2⊗jsOpIhCn

Переопределите в класс Employee конструктор родителя, добавив в него параметр с возрастом и зарплатой.

№3⊗jsOpIhCn

Сделайте геттеры для возраста и зарплаты.


*/
class User{
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}
	getName() {
		return this.name;
	}
	getSurn() {
		return this.surn;
	}
}
class Employee{
	constructor(name, surn, salary, age) {
		super(name, surn);
		this.salary = salary;
		this.age = age;
	}
	getAge() {
		return this.age;
	}	
	getSalary() {
		return this.salary;
	}
}
