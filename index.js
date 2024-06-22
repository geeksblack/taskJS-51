// Выведите на экран сумму зарплат созданных вами работников.
// Запишите в свойство каждого работника его имя и зарплату.
// Создайте несколько объектов класса Employee.



class Employee{
	name;
	age;
	salary;
}
let employee1 = new Employee;
let employee2 = new Employee;
let employee3 = new Employee;
employee1.name = 'Yuriy';
employee1.salary = '2000';
employee2.name = 'Max';
employee2.salary = '1500';
employee3.name = 'Igor';
employee3.salary = '1900';
console.log('зарплата 1 робітника : ' + employee1.name+' '+employee1.salary);
console.log('зарплата 2 робітника : ' + employee2.name + ' ' + employee2.salary);
console.log('зарплата 3 робітника : ' + employee3.name + ' ' + employee3.salary);
let sum = parseInt(employee1.salary) + parseInt(employee2.salary) + parseInt(employee3.salary);
console.log('сума зарплат робітників : ' +sum) ;