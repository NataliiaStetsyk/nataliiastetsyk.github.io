/* 1. На HTML-сторінці є елемент div:
    <body>	
	<div id="test">First</div>
  </body>	
Потрібно змінити вміст елемента із First на Last.
 Доступіться до елемента div хоча б 2 способами.	
*/

let id = document.getElementById("test");
let x = document.querySelector("div#test");
id.innerHTML = "Last";
x.innerHTML = "Last";