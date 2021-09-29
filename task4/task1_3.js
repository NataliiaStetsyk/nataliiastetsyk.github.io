/*3. 3. Реалізуйте функцію showUser(id),
 яка приймає параметром користувацьке id і повертає об’єкт,
який містить значення переданої id.
Також функція викидає помилку у разі якщо введено від’ємне id. 
Реалізуйте функцію showUsers(ids),
яка приймає параметром масив користувацьких айді ids,
перевіряє з використанням функції showUser() кожен елемент масиву
ids на коректність, в разі виключної ситуації виводить повідомлення про помилку.
Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids. 

Приклад роботи програми: 

showUsers([7, -12, 44, 22]); 

Error: ID must not be negative: -12 

[ {id: 7}, {id: 44}, {id: 22} ] */

let showUser = (id) => {
    if (id < 0) {
        throw new Error("ID must not be negative: " + id);
    } else {
        return { id: id }
    }
}

let showUsers = (ids) => {
    try {
        let correctIds = [];
        for (let i = 0; i < ids.length; i++) {
            showUser(ids[i]);
            correctIds.push(showUser(ids[i]))
        }
        return correctIds;
    } catch (err) {
        console.log(err.name);
        console.log(err.message);
    };
}

console.log(showUsers([7, -12, 44, 22]));
console.log(showUsers([7, 12, 44, 22]));