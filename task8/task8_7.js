/*6. Напишіть функцію, яка перевіряє правильність логіна.
Правильний логін - рядок від 2 до 10 символів,
що містить лише букви та цифри,цифра не може бути першою.
Функція має приймати рядок і знаходити усі числа в цьому рядку,
включаючи числа з плаваючою комою (наприклад, 3.4).
	Приклад роботи:
checkLogin('ee1.1ret3');
true 
1.1, 3
checkLogin('ee1*1ret3');
false 
1, 1, 3
*/

let checkLogin = (username) => {
	let res = /^[a-z0-9. ,]{2,10}$/;
	(res.exec(username)) ? console.log(true) : console.log(false)
	let num = username.replace(/[^0-9.]/g, " ");
	console.log(num);
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));
