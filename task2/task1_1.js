let x = 1; 
let y = 2; 
let res1 = String(x) + String(y);

console.log(res1); // "12" 
console.log(typeof res1); // "string" 

let res2 = Boolean(1) + String(2); 
console.log(res2); // "true2" 
console.log(typeof res2); // "string" 

let res3 = Boolean(1) && Boolean(2);// 
console.log(res3); // true 
console.log(typeof res3); // "boolean" 

let res4 = parseFloat(Boolean(1) + String(2)); 
console.log(res4); // NaN 
console.log(typeof res4); // "number" 