/*
№1⊗jsOpBsOIC

Дан следующий класс:

class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}
Сделайте так, чтобы во второй и третий параметры передавались объекты отдельных классов.

№2⊗jsOpBsOIC

Создайте объект с работником с помощью класса из предыдущей задачи.

№3⊗jsOpBsOIC

Выведите в консоль имя, должность и отдел для созданного работника.

*/
class Position{
	constructor(name) {
		this.name = name;
	}
}
class Department{
	constructor(name) {
		this.name = name;
	}
}
class Name{
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}
let position = new Position('php developer');
let name = new Name('Yuriy');
let department = new Department('IT software');
let employee = new Employee(name, position, department);
console.log(employee.name.name);
console.log(employee.position.name);
console.log(employee.department.name);