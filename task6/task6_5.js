/* 5. Для сторінки
          <body>
               <h1>I'am a big header!!!</h1>
        <div id="myDiv">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
            <p>Fourth paragraph</p>
        </div>
        <ul id="myList">
            <li>Make</li>
            <li>me</li>
            <li>horizontal!</li>
        </ul>
        <span>Make me invisible, please!</span>
        </body>
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:
*/
let h1 = document.getElementsByTagName("h1")[0];
h1.style.backgroundColor = "#00FF00";
h1.style.width = "550px";
h1.style.fontSize = "52px";
let p = document.querySelectorAll("div#myDiv p");
p[0].style.fontWeight = "900";
p[1].style.color = "red";
p[2].style.textDecoration = "underline";
p[3].style.fontStyle = "italic";
let ul = document.querySelectorAll("ul#myList li");
let str = [];
for (let li = 0; li < ul.length; li++) {
    str.push(ul[li].innerHTML);
}
document.getElementById("myList").innerHTML = str.join("");
document.getElementsByTagName("span")[0].style.visibility = "hidden";