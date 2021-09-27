let objDate = new Date();
let hours = objDate.getHours();
if (hours >= 23 && hours < 5) {
    console.log("Доброї ночі");
}
else if (hours >= 5 && hours < 11) {
    console.log("Доброго ранку");
}
else if (hours >= 11 && hours < 17) {
    console.log("Доброго дня");
}
else {
    console.log("Доброго вечора");
}


let today = new Date();
let timeNow = today.getHours()
let greeting;

switch (true) {
    case (timeNow >= 23 && timeNow < 5): greeting = "Доброї ночі";
        break;
    case (timeNow >= 5 && timeNow < 11): greeting = "Доброго ранку";
        break;
    case (timeNow >= 11 && timeNow < 17): greeting = "Доброго дня";
        break;
    case (timeNow >= 17 && timeNow < 23): greeting = "Доброго вечора";
        break;
}

console.log(greeting)