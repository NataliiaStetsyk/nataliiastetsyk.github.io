/**
 * Виконати тестування заданого масиву userList. 
1)	Протестувати чи є в масиві елемент “admin”
2)	Протестувати чи перший елемент в масиві  “Nick”
3)	Протестувати чи останній елемент в масиві  “new_user_2”
4)	Протестувати твердження, що довжина масиву дорівнює 5
5)	Протестувати твердження, що 3-ій елемент масиву має тип string
6)	Протестувати твердження, що 8-го елементу масиву немає.
 */

const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

test('the user list has "admin" on it', () => {
    expect(userList).toContain('admin');
    expect(new Set(userList)).toContain('admin');
    expect(userList[0]).toEqual('Nick');
    expect(userList[length - 1]).toEqual('new_user_2');
    expect(userList.length).toBe(5);
    expect(typeof userList[2]).toEqual("string");
    expect(userList[7]).toBeUndefined();
});