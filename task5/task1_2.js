/* 2. Створіть довільний об’єкт, який має 5 полів.
 Необхідно написати функцію showProps(obj),
яка приймає даний об’єкт і виводить список його властивостей записаних в масив.
 Виведіть також масив значень властивостей об’єкта.*/
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    eyeColor: "blue",
    isAmerican: true
};

let showProps = (obj) => {
    let result = [], prop;

    for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
        }
    }
    return result;
}

let showValues = (obj) => {
    let result = [], value;

    for (value in obj) {
        if (hasOwnProperty.call(obj, value)) {
            result.push(obj[value]);
        }
    }
    return result;
}

console.log(showProps(person));
console.log(showValues(person));
