/* 1. Реалізуйте функцію calcRectangleArea(),
 яка приймає 2 параметри ширина прямокутника width і висота прямокутника height
і обраховує його площу. Передбачити припинення виконання програми
і генерацію винятку у випадку, якщо функції передано не числові параметри. 
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації. */

let calcRectangleArea = (width, height) => {
    if (typeof(width) === "number" || typeof(height) === "number") {
        return width * height;
    } else {
        throw new Error("Incorrect data!");
    };
};

try {
    calcRectangleArea(x, 4);
} catch (exception) {
    console.error(exception);

};

try {
    calcRectangleArea("x", "y");
} catch (exception) {
    console.error(exception);

};

alert("Площа прямокутника рівна  " + calcRectangleArea(20, 10));