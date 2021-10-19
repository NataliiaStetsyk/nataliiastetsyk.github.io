/* За допомогою методів об’єкта window створити:
1) нове вікно розміром 300х300 пікселів.
2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
4) із затримкою 2 сек закрийте вікно.
*/

let win;
let openWin = () => {
  win = window.open("about:blank", "example", "width=300, height=300");
}
let resizeWinTo = () => {
  setTimeout(() => { win.resizeTo(500, 500); }, 2000);
}
let moveWinTo = () => {
  setTimeout(() => { win.moveTo(200, 200); }, 2000);
}
let closeWin = () => {
  setTimeout(() => { win.close(); }, 2000);
}