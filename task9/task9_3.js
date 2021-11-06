/*Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного
 типу і повертає добуток параметрів типу Number.
	Якщо параметри типу Number відсутні, повертає число 0.
function mul() {
   // Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
Не можна використовувати властивість arguments, але в функцію mul()
 можна додати один параметр.

*/
function mul(...data) {
	let newArray = data.filter(function (el) {
		return typeof el === "number";
	});

	if (newArray.length > 0) {
		let total = newArray.reduce((a, b) => a * b);
		return total
	}
	else { return 0 }

}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0 