/* Напишіть функцію raiseToDegree(a,b),
 яка повертає результат піднесення числа a до степеня b.
Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури. 
Sample Output: 
raiseToDegree(3, 4);  // 81  */

let raiseToDegree = (base, exp) => {
    if (Number.isInteger(base)) {
        if (exp === 0) {
            return 1;
        }
        return base * raiseToDegree(base, exp - 1);
    } else { console.log("Base is not integer!") }
}
raiseToDegree(prompt("Please, enter a base?", "base"), prompt("Please, enter an exp?", "exp"))