/*3.Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript
 код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки
 стає коричневий. При відпусканні – білий.
4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
 */

let changeBlue = () => {
    document.body.style.backgroundColor = 'blue';
}
let changePink = () => {
    document.body.style.backgroundColor = 'pink';
}
let changeBrown = () => {
    document.body.style.backgroundColor = 'brown';
}
let changeWhite = () => {
    document.body.style.backgroundColor = 'white';
}
let changeYellowByLink = () => {
    document.body.style.backgroundColor = 'yellow';
}
let changeWhiteByLink = () => {
    document.body.style.backgroundColor = 'white';
}