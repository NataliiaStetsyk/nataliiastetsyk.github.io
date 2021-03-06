/* 7. Напишіть функцію, яка повертає останній елемент масиву.
 Функція може приймати 2 параметра: 1-ий масив,
2-ий числовий параметр, що відповідає кількості
'х' останніх елементів масиву, які треба вивести. 

Sample Output: 
console.log(lastElem([3, 4, 10, -5]));      // -5 
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5] 
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5] */

let lastElem = (arr, x) => {
    return arr.slice(arr.length - x)
}

console.log(lastElem([3, 4, 10, -5], 1));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));

