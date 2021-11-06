/* Вихідний код:
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [/* Ваш код ] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]
Допишіть код використовуючи деструктурування,
 щоб в консолі браузера з'явилися рядки, які написані в коментарях.
*/

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]