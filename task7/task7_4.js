/* Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент
 випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
*/
let chooseAndDelete = () => {
    let arr = document.getElementById("mySelect");
    for (let i = 0; i <= arr.options.length; i++) {
        if (arr.options[i].selected) {
            arr.removeChild(arr.options[i])
        }
    }
}