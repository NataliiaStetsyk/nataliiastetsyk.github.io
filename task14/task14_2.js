/*Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. 
Функція повинна повернути Promise, робота якого завершується поверненням
 добутку елементів масиву, якщо вони є типу Numbers, або повідомленням
  " Error! Incorrect array! " у випадку, якщо хоча б 1 елемент масиву нечисловий.
Приклад застосування функції:
calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"*/
const calcArrProduct = (arr) => new Promise((resolve, reject) => {
  arr.forEach((element) => {
    if (typeof arr[element] === 'number') {
      arr.reduce((a, b) => a * b, 1)
      resolve();
      reject('Error! Incorrect array!');
    }
  });
});

calcArrProduct([3,4,5]).then(result => console.log(result));
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));


