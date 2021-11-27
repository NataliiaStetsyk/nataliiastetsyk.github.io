function getCircleLength(radius) {
    return 2 * Math.PI * radius;
}

function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}

function compileCircleCode() {
    throw new Error('you are using the function with no arguments');
  }

module.exports =  {getCircleLength, getCircleArea, compileCircleCode}