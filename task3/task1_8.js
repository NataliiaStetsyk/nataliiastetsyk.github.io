/*8. Напишіть функцію, яка приймає рядок як параметр
 і перетворює першу букву кожного слова рядка в верхній регістр. 
Input string: 'i love java script'  
Output string: 'I Love Java Script' */

const capitalizeNames = (str) => {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const strConverted = arr.join(" ");
    return strConverted
};

console.log(capitalizeNames('i love java script'));