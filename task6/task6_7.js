/*7. Напишіть скріпт, який за допомогою засобів DOM
 створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
		<body>
		  <main class="mainClass check item"> 	
		        <div id="myDiv">
           <p>First paragraph</p>           
         </div>
       </main> 
	    </body>
*/
let rootNode = document.getElementsByTagName("body")[0];
let main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
rootNode.appendChild(main);
let myDiv = document.createElement("div");
myDiv.setAttribute("id", "myDiv");
main.appendChild(myDiv);
let paragraph = document.createElement("p");
paragraph.innerHTML = "First paragraph";
myDiv.appendChild(paragraph)