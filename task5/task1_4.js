class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    // Getter
    get fullName() {
        return this.fullName();
    }
    get experience() {
        return this.#experience;
    }
    set experience(value) {
        this.#experience = value;
    }

    // Method fuul name
    fullName() {
        return this.fullName;
    }
    // Method show salary
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    // Method show salary with experience
    showSalaryWithExperience() {
        return (this.#experience * this.dayRate * this.workingDays).toFixed(2);
    }

}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + ' salary ' + worker1.showSalary());
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName + ' salary ' + worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName + ' salary ' + worker1.showSalaryWithExperience());
let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + ' salary ' + worker2.showSalary());
console.log("New experience: " + worker2.experience);
console.log(worker2.fullName + ' salary ' + worker2.showSalaryWithExperience());
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
console.log(worker2.fullName + ' salary ' + worker2.showSalaryWithExperience());
let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + ' salary ' + worker3.showSalary());
console.log("New experience: " + worker3.experience);
console.log(worker3.fullName + ' salary ' + worker3.showSalaryWithExperience());
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
console.log(worker3.fullName + ' salary ' + worker3.showSalaryWithExperience());

// create a list of workers
let workers = [
    new Worker("John Johnson", 20, 23),
    new Worker("Tom Tomson", 48, 22),
    new Worker("Andy Ander", 29, 23)
];

// a sorting function
let sorter = {
    bySalary: (a, b) => {
        return (a.showSalaryWithExperience() - b.showSalaryWithExperience());
    }
};

let show = (title) => {
    console.log("Sorted " + title);
    for (let i = 0; i < workers.length; i++) {
        console.log("  " + workers[i].fullName + "  " + workers[i].showSalaryWithExperience());
    }
    console.log(" ");
}

workers.sort(sorter.bySalary);
show("salary: ")