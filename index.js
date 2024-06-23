// Определите, каким будет результат выполнения следующего кода:
// class Student {
	
// }
// class Employee {
	
// }

// let employee = new Employee;
// console.log(employee instanceof Employee);
// console.log(employee instanceof Student);

// true and false

//////////////////////////////////////////////////////////////////////
//Переберите циклом массив объектов и выведите в консоль только имена работников.

 
class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('user1'),
	new Employee('user2'),
	new Student('user3'),
	new Employee('user4'),
	new Student('user5'),
	new Employee('user6'),
	new Student('user7'),
];
for (let user of users) {
	if (user instanceof Employee) {
		console.log(user.name);
	} else {
		throw new Error('user is imcorrect');
	}
	
}