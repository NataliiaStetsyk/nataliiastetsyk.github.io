/*6. Задано HTML-сторінку:
    <body>
<input type="text" id="input1" value="Text1">
<input type="text" id="input2" value="Text2">
  </body>
1)	Користувач почергово вводить 2 повідомлення (використати prompt()).
 1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
2)	Поміняти значення 1-го і 2-го інпутів місцями.
*/
let input1 = document.getElementById("input1");
input1.value = prompt("Please, enter your message?", "message1");
let input2 = document.getElementById("input2");
input2.value = prompt("Please, enter your message?", "message2");
let tmp = input1.value;
input1.value = input2.value;
input2.value = tmp;