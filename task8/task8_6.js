/*6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку
 на їх відповідність емейлу.
    Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лише символи “_” і “-”. 
 •  Символ “-” не може повторюватися, не може бути 1-им символом емейлу.

checkEmail('my_mail@gmail.com');
Email is correct!
checkEmail('#my_mail@gmail.com');
Email is not correct!
*/
let checkEmail = (mail) => {
    let regexp = /^\w+([\-]?\w+)@[a-z]{1,}\.[a-z]{1,}$/;
    (regexp.test(mail)) ? console.log("Email is correct!") : console.log("Email is not correct!")
}
checkEmail("my_mail@gmail.com");
checkEmail('#my_mail@gmail.com');