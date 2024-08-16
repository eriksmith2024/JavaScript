var itemTwo = document.getElementById('two'); // gets second list item
var elText = itemTwo.firstChild.nodeValue; //gets its text content

elText = elText.replace('pine nuts', 'Avocado'); // changes pine nuts to Avocado
itemTwo.firstChild.nodeValue = elText; // updates the list item
