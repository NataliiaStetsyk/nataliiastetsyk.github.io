/**
1)	Протестувати функцію getCircleLength() з аргументом 22,
 перевірити твержєення, що довжина кола дорівнює 138.2 при розрахунку
  з точністю до 1-го знаку після коми.
2)	Протестувати функцію getCircleArea() з аргументом 9,
 перевірити твержєення, що приблизна площа кола дорівнює 254.47.
3)	Протествувати обидві функції без переданих аргументів.
*/

const { getCircleLength, getCircleArea  } = require('./calcCircle');

test('the user list has "admin" on it', () => {
    expect(getCircleLength(22)).toBeCloseTo(138.2);
    expect(getCircleArea(9)).toBeCloseTo(254.47);
    expect(getCircleLength).toHaveBeenCalledWith(radius);
    expect(getCircleArea).toHaveBeenCalledWith(radius);
});