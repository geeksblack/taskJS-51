// Проверьте, что ваш класс Employee наследует методы от класса User.
class User{
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}
class Employee extends User{

}
let employee = new Employee;
employee.setName('Yuriy');
let name = employee.getName();
console.log(name);