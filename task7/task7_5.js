/* 5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
 а при відведенні курсора
 миші виводитиме повідомлення "Mouse is not on me!"
*/
let pressed = () => {
    document.getElementById('live').innerHTML = 'I was pressed!';   
}
let hovered = () => {
    document.getElementById('live').innerHTML = 'Mouse on me!';   
}
let released = () => {
    document.getElementById('live').innerHTML = 'Mouse is not on me!';   
}