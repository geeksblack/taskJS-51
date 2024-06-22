// Сделайте в вашем классе Employee какой-нибудь тестовый метод. Вызовите его.



class Employee{
	show(name,salary) {
		return name+' '+salary;
	};
}
let employee = new Employee;
console.log(employee.show('Yuriy','2000$'));