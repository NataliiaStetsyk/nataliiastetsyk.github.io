/*3.<body>
	<h2>Article header</h2>      
      <div id="text">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </div>
	<p>Another text</p>
    </body>
На вказаній HTML-сторінці необхідно отримати всі елементи всередині
 тега div по селектору (використати метод document.querySelectorAll).
  І вивести їх вміст із вказанням номеру абзацу в такому форматі:
Selector text 0: First paragraph
Selector text 1: Second paragraph
Selector text 2: Third paragraph
 */

let elements = document.querySelectorAll("div#text p");
for (let el = 0; el < elements.length; el++){
    console.log("Selector text " + el + ": " + elements[el].innerHTML)
}