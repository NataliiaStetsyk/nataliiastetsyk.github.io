let number = prompt("Please, enter a number?", "number");
if (number > 0) {
    if (number % 7 === 0) { console.log("Number " + number + " positive and multiple of 7"); }
    else {
        console.log("Number " + number + " positive but not multiple of 7");
    }
} else if (number < 0) {
    console.log("Number " + number + " negative");
} else {
    console.log("Number " + number + " is exactly zero");
}