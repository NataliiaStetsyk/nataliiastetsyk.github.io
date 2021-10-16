/* На HTML-сторінці є ненумерований список з id="list",
 який складається із 5 елементів.
  У модальному вікні необхідно послідовно вивести вміст:
    1) першого елемента списку
    2) останнього елемента списку
    3) другого елемента списку
    4) четвертого елемента списку
    5) третього елемента списку
Зробіть завдання 2 різними способами.	
Приклад:
•	1
•	2
•	3
•	4
•	5
Результат виводу: 1, 5, 2, 4, 3
*/


let elem = document.querySelectorAll("#list li");
alert("The First approach: " + elem[0].innerHTML + "," + elem[4].innerHTML + "," + elem[1].innerHTML + "," + elem[3].innerHTML + "," + elem[2].innerHTML)

let uls = document.getElementById("list").children;
let sorted = [];
for (let el = 0; el < uls.length; el++) {
    sorted.push(uls[el].innerHTML);
}

let z = sorted.filter(function (n) { return n % 2 === 0; });
let b = sorted.filter(function (n) { return n % 2 !== 0; });
let y = b.concat(z);

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
};

alert("The Second approach: " + y.move(1, 4));





