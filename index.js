/*
Попробуйте в классе Employee воспользоваться приватным методом родителя.



*/

class User{
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	#capeFirst(str) {
		return str[0].toUpperCase() + str.splice(1);
	}
}
class Employee extends User{
	setSurn(surn) {
		this.surn = surn;
	}
	getSurn() {
		return this.#capeFirst(this.surn);//
	}
}