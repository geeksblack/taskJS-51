/*
№1⊗jsOpBsCMS

Сделайте класс Validator, который будет выполнять проверку строк на корректность.

№2⊗jsOpBsCMS

Сделайте в вашем классе метод isEmail, проверяющий строку на то, что она корректный email.

№3⊗jsOpBsCMS

Сделайте в вашем классе метод isDomain, проверяющий строку на то, что она корректное имя домена.

№4⊗jsOpBsCMS

Сделайте в вашем классе метод isNumber, проверяющий строку на то, что она содержит только числа.



*/
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const test_data = ['example.com', 'example.com:8080', 'test.com', '233-1172-0.nodered-t.it.loc:443', '10.10.50.140:5900', '10.10.50.140', '10.10.50.1400', '10.10.5.140', '10f.10.50.140', 'https://10.10.50.140:5900', 'https://10.10.50.140', 'https://test.com', 'https://example.com:8080', '-test.com', 'te-st.com', 'test-.com', 'https://test-.com', 'https://-test.com', 'https://te-st.com', '10.10.50.140:5900', 'doc1.test.com.ua:5900', 'https://233-1172-0.test-t.da.com:443', 'd.llanfairpwllgwyngyllrychwyrndrobwllllatysiliogogogoch.co.da:443', '10.10.50:5900', 'doc1.test.com.ua:59sd00', 'https://233-1172-0.tes.com:443', 'llanfairpwllgwyngyllrychwyrndrobwllllatysiliogogogoch.co.da:443'];
const regexp_no_domain_validation = /^(https?:\/\/)?((([a-z0-9-]+\.)+([a-z]{2,}))|((\d{1,3}\.){3}\d{1,3}))(:\d{1,5})?$/i;
const regexp_with_domain_validation = /^(https?:\/\/)?((((?!-)([a-z0-9-]{1,63})(?<!-)\.)+([a-z]{2,}))|((\d{1,3}\.){3}\d{1,3}))(:\d{1,5})?$/i;
const hasNumber = /\d/;

class Validator{
	getEmail(value) {
		return EMAIL_REGEXP.test(value);
	}
	getDomain(value) {
		return regexp_with_domain_validation.test(value)
	}
	getNumber(value) {
		return hasNumber.test(value);
	}
}
let validator = new Validator;
console.log(validator.getEmail('vysotskyiyuriy@gmail.com'))
console.log(validator.getDomain('autoria.ua'))
console.log(validator.getNumber('2222'))
