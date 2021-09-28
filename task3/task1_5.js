/*5. Реалізуйте функцію – findMin(), яка повинна приймати
довільну кількість числових аргументів і повертати той,
який має найменше значення. Порада: для розв’язку можете
скористатися спеціальним масивом arguments. 
Sample Output: 
findMin(12, 14, 4, -4, 0.2); // => -4  */

let findMin = (...args) => {
    let i = 0,
        min = args[0];

    for (i = 1; i < args.length; i++) {
        if (min > args[i]) {
            min = args[i];
        }
    }
    return min;
}
console.log(findMin(12, 14, 4, -4, 0.2));