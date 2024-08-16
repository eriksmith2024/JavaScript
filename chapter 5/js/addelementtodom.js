//create new element and store it in a variable
var newEl = document.createElement('li');

//create a text node and store it in a variable
var newText = document.createTextNode('quinoa');

//attache the new text node to the new element
newEl.appendChild(newText);

// Find the popsition where the new element should be added
var position = document.getElementsByTagName('ul') [0];

// insert the new element into its position
position.append(newEl);
