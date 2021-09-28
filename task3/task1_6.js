/* 6. Напишіть функцію findUnique(arr), яка приймає масив arr
і перевіряє на унікальність його елементи.
Якщо всі елементи масиву унікальні (не мають дублів),
то функція поверне true, інакше - false. 
Sample Output: 
findUnique([1, 2, 3, 5, 3]);  // => false 
findUnique([1, 2, 3, 5, 11]); // => true */


let findUnique = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i !== j && arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));