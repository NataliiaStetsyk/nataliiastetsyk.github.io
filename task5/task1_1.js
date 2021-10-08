/* 1. Напишіть функцію propsCount(currentObject),
 яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад для об’єкта
let mentor = {
course: "JS fundamental",
duration: 3,
direction: "web-development"
};
Результат має бути 3.
propsCount(mentor); // 3*/

let propsCount = (currentObject) => {
    if (typeof currentObject !== 'function' && (typeof currentObject
        !== 'object' || currentObject === null)) {
        throw new TypeError('You entered a non-object!');
    }

    let count = 0;
    for (let props in currentObject) {
        count++
    }
    return count;
};

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

console.log(propsCount(mentor));
