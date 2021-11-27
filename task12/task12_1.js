/**
 * Протестувати додавання числа 0.1 до числа 0.2 із результатом 0.3.
 */
 test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });
