/* 2. На сторінці є елемент зображення:
     <body>
		   <img class="image" src="dog.jpg">
     </body>
Потрібно змінити зображення dog.jpg на cat.jpg.
Виведіть в модальному вікні вміст тегу img з новим зображенням.
*/
let img = document.querySelector("img.image");
img.src = "cat.jpg";
alert(document.getElementsByTagName("img")[0].outerHTML)