/* 2. Напишіть функцію, яка приймає рядкові дані
 і виконує перевірку на їх відповідність емейлу.
  Валідними вважаються всі символи на різних позиціях.
	Приклад роботи:
checkEmail("Qmail2@gmail.com");
true
*/
let checkEmail = (mail) => {
    let regexp = /^\w+([\-]?\w+)@[a-z]{1,}\.[a-z]{1,}$/;
    return regexp.test(mail);
}
console.log(checkEmail("Qmail2@gmail.com"));
