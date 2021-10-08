class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return this.base * this.height * 0.5;
    }
}

class Square extends GeometricFigure {
    constructor(length) {
        super();
        this.length = length;
    }
    getArea() {
        return Math.pow(this.length, 2);
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let handleFigures = (arr) => {
    let figures = [], total_area = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof GeometricFigure) {
            figures.push("Geometric figure: " + arr[i].toString() + " - area " +
                + arr[i].getArea());
            total_area = total_area + parseFloat(arr[i].getArea())
        }
    }
    return { figures, total_area }
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));