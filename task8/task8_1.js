/* Напишіть функцію, яка перевірятиме чи перший символ
 в рядку написаний в верхньому регістрі, чи ні. 
  Приклад роботи:
upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character 
String's starts with uppercase character
*/

let upperCase = (str) => {
  let regexp = /^[A-Z]/;
  let result = regexp.test(str);
  if (result === false) {
    console.log("String's not starts with uppercase character")
  }
  if (result === true) {
    console.log("String's starts with uppercase character")
  }
}
console.log(upperCase("regexp"));
console.log(upperCase("Regexp"));