// Сделайте в вашем классе Employee какой-нибудь тестовый метод. Вызовите его.



class Employee{
	showName() {
		console.log(this.name);
	};
	showSalary() {
		console.log(this.salary);
	};
}
let employee = new Employee;
employee.name = 'Yuriy';
employee.salary = '2000$';
employee.showName();
employee.showSalary();