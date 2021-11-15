/* На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript),
 в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер,
  завантажується файл books.json
 і з нього виводяться всі назви авторів у вигляді списку на HTML-сторінку.
*/

const http = require('http');
const staticLib = require('node-static');
const file = new staticLib.Server('.');

http.createServer(accept).listen(8080);
console.log("Server running on port 8080");

function accept(req, res){
   if (req.url === '/books.json'){
      file.serve(req, res);
   } else {
      file.serve(req, res)
   }
}