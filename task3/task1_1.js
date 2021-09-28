/* 1. Заданий масив з елементами [2, 3, 4, 5].
За допомогою циклу for знайдіть добуток елементів цього масиву.
Також реалізуйте завдання через while.*/

let array = [2, 3, 4, 5];
let prod = 1;
for (let i = 0; i < array.length; i++) {
    prod = prod * array[i];
}
console.log(prod)

let arrayW = [2, 3, 4, 5];
let prodW = 1;
let n = -1;
while (n < arrayW.length - 1) {
    n++;
    prodW = prodW * arrayW[n]; 
}
console.log(prodW);
