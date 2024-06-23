class User {
	#name;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

class Employee extends User {
	setName(name) {
		let nameof = this.getName();
		if (nameof.length > 0) {
			this.setName(name) ;
		}
	}
}