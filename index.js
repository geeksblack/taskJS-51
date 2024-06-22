/*
№1⊗jsOpBsMIC

В объект класса Student запишите свойства name и surn.

№2⊗jsOpBsMIC

Сделайте вспомогательный метод, который будет получать первый символ строки и делать его заглавным.

№3⊗jsOpBsMIC

Сделайте метод, который вернет инициалы студента, то есть первые буквы его имени и фамилии.






*/
class Student {
	showName() {
		return this.cape(this.name);
	}
	showSurn() {
		return this.cape(this.surn);
	}
	cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}
let student = new Student;
student.name = 'yuriy';
student.surn = 'vysotskyi';
console.log(student.showName())
console.log(student.showSurn())
