/* Необхідно створити власний модуль personalmodule.js,
 який містить функцію, що приймає ім"я системного юзера
  і працює з поточним часом та на основі пори доби виводить 
  повідомлення із привітанням юзера. Щоб експортувати змінні
   чи функції модуля на зовні можна використати об"єкт module.exports. 
   Створіть Node.js сервер, який з використанням функціоналу
   розробленого модуля повертатиме наступну сторінку:
*/

const user = require("./personalmodule.js");
const http = require("http");
http.createServer(function (req, res) {
   res.writeHead(200, { "Content-Type": "text/html" });
   res.write(`Date of request: ${user.getDate()}  <br/>`);
   let day = user.getDate();
   let hour = day.getHours();
   if (hour >= 6 && hour < 12) {
      res.write(`Good morning, ${user.getUserInfo()}`);
   }
   if (hour >= 12 && hour < 18) {
      res.write(`Good afternoon, ${user.getUserInfo()}`);
   }
   if (hour >= 18 && hour < 24) {
      res.write(`Good evening, ${user.getUserInfo()}`);
   }
   if (hour >= 24 && hour < 6) {
      res.write(`Good night, ${user.getUserInfo()}`);
   }
   res.end();
}).listen(8000);
console.log("Server running on port 8000");
