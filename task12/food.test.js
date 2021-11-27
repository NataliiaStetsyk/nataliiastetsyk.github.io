/**
 * Створити файл food.test.js в якому потрібно протестувати функцію для заданого масиву food 
 * з аргументами min = 12, max = 40. 
1)	Протестувати чи очікувана довжина відсортованого масиву 3, відповідає реальній.
2)	Протестувати чи відсортований масив містить об’єкт { kind: 'pepper', price: 27 }.
3)	Протестувати чи відсортований масив містить 2, 3 і 4 елементи вихідного масиву food.
4)	Протестувати чи властивість price 1-го елемента відсортованого масиву є більшою значення min.
5)	Протестувати чи властивість price 3-го елемента відсортованого масиву є меншою значення max.
6)	Протестувати твердження про те, що відсортований масив не містить елемента { kind: 'lemon', price: 50 }.
7)	Запропонуйте і протестуйте щонайменше 2-3 своїх твердження для заданої функції і масиву food.
 */
const foods = require('./food');

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

test('the user list has "admin" on it', () => {
    expect(foods(food, 12, 40).length).toBe(3);
    expect(new Set(foods(food, 12, 40))).toContain({ kind: 'pepper', price: 27 });
    expect(new Set(foods(food, 12, 40))).toContain(food[1], food[2], food[3]);
    expect(new Set(foods(food, 12, 40))[0].price).toBeGreaterThan(12);;
    expect(new Set(foods(food, 12, 40))[2].price).toBeLessThan(40);
    expect(new Set(foods(food, 12, 40))).not.toContain({ kind: 'lemon', price: 50 });
    expect(new Set(foods(food, 12, 40))).not.toBeNull();
    expect(new Set(foods(food, 12, 40))).not.toBeUndefined();
});