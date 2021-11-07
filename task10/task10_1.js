/* Створити Node.js http-сервер, який слухатиме запити на порт 5000
 на локальній  машині. Сервер повинен повертати сторінку, що містить
  ім’я поточного користувача операційної системи, тип операційної системи,
   час роботи системи в хвилинах (використати модуль OS),
 поточну робочу директорію і назву файлу сервера (використати модуль path).
*/

const http = require('http');
const os = require("os");
const path = require('path');
const br = "<br></br>";
http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write("<h1>System information</h1>" + "Current user name: " +
        os.userInfo().username + br + "OS type: " + os.type()
        + br + "System work time: " + (os.uptime() / 60) + " min"
        + br + "Current work directory: " + path.dirname("./task10/task10_1.js")
        + br + "Server File Name: " + path.basename("./task10/task10_1.js") + br);
    response.end();
}).listen(5000);
console.log('If you seee this, you are on the right way');