/* 5. Напишіть регулярний вираз, який в рядковому тексті 2
 підстрічки буде міняти місцями.
	Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”
*/
let re = /(\w+)\s(\w+)/;
let str = "Java Script";
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  