let a = parseFloat(prompt("What is the length of th 1st side?", "a"));
let b = parseFloat(prompt("What is the length of th 2nd side?", "b"));
let c = parseFloat(prompt("What is the length of th 3rd side?", "c"));
if ((a <= 0) || (b <= 0) || (c <= 0) || isNaN(a) || isNaN(b) || isNaN(c)) {

    console.log("Incorrect data!");
} else {
    let perimeter = (a + b + c) / 2;
    let area = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
    area = parseFloat(area.toFixed(3));
    console.log("Площа трикутника рівна  " + area);

    let res1 = (a * a) === (b * b) + (c * c);
    let res2 = (b * b) === (a * a) + (c * c);
    let res3 = (c * c) === (a * a) + (b * b);
    let check = (res1 || res2 || res3) ? "Трикутник прямокутний " + true : "Трикутник не прямокутний " + false;
    console.log(check);
}