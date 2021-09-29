/* 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік 
і генерувати в модальному вікні помилки у випадку, коли:  
- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),  
- нечислове значення 
- вік юзера менше 14 років.  
В іншому разі юзер отримує доступ до перегляду фільму. 
В блокові catch передбачити виведення назви і опису помилки. */

let checkAge = () => {
    let age = prompt("Enter age");
    if (age === "") { throw new Error("The field is empty! Please enter your age"); }
    else if (isNaN(age)) { throw new Error("Not a number!"); }
    else if (age < 14) { throw new Error("You are too young"); }
    else { console.log("WELCOME!"); }
}
try {
    checkAge();
}
catch (err) {
    console.log(err.name);
    console.log(err.message);
}
