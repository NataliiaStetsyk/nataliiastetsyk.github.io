/*6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти)
 вікна браузера і виводитиме на поточну
 сторінку при її розтязі/стисканні відповідні значення.
*/
let getSize = () => {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;

    document.getElementById('wh').innerHTML = "<h1>Width: " + w + " Height: " + h + "</h1>";
}