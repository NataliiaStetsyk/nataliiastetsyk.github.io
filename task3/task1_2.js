/* 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15.
 Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і
 відображатиме повідомлення на екрані.*/
for (let number = 0; number <= 15; number++) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

