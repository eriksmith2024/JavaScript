// Select the element and store it in a variable.
var el = document.querySelector('li.hot');
el.className = 'cool';


//query returns a node list
// The second matching element (the third list item) is selected and changed

var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';



