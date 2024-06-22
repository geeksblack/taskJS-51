/*
№1⊗jsOpBsMIC

В объект класса Student запишите свойства name и surn.

№2⊗jsOpBsMIC

Сделайте вспомогательный метод, который будет получать первый символ строки и делать его заглавным.

№3⊗jsOpBsMIC

Сделайте метод, который вернет инициалы студента, то есть первые буквы его имени и фамилии.






*/
class Student {
	name='Yuriy';
	surn = 'Vysotskyi';
	showName() {
		return this.name;
	}
    showSurn() {
		return this.surn;
	}

}
let student = new Student;
console.log(student.showName())
console.log(student.showSurn())
