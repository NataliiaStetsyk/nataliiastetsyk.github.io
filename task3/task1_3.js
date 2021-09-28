/*3. Напишіть функцію randArray(k),
яка заповнюватиме масив k випадковими цілими числами.
Випадкові числа генеруються із діапазону 1-500. 
Sample Output: 
randArray(5);  // 399,310,232,379,40*/

let randArray = (k) => {
    let arr = [];
    while (arr.length < k) {
        let el = Math.floor(Math.random() * 500) + 1;
        if (arr.indexOf(el) === -1) arr.push(el);
    }
    return arr;
}

console.log(randArray(5))