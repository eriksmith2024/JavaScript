//ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0]; // Get the Unordered List element (ul)
 
//ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li'); // Create variable with new List Item (li) elememnt
var newTextLast = document.createTextNode('cream'); // Create variable newTextLast creating new text node
newItemLast.appendChild(newTextLast); //Add text node to unordered list element as child of unordered list
list.appendChild(newItemLast);


//ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li'); // Create variable with new List Item (li) elememnt
var newTextLast = document.createTextNode('rapberries'); // Create variable newTextLast creating new text node
newItemLast.appendChild(newTextLast); //Add text node to unordered list element as child of unordered list
list.appendChild(newItemLast);

//ADD NEW ITEM AT START OF LIST
var newItemFirst = document.createElement('li'); //create variable newItemFirst which is then used to create new list element
var newTextFirst = document.createTextNode('Blueberries'); // create new text node
newItemFirst.appendChild(newTextFirst); // add text node to element
list.insertBefore(newItemFirst, list.firstChild); // add elememt to list

//ADD NEW ITEM AT START OF LIST
var newItemFirst = document.createElement('li'); //create variable newItemFirst which is then used to create new list element
var newTextFirst = document.createTextNode('Meringues'); // create new text node
newItemFirst.appendChild(newTextFirst); // add text node to element
list.insertBefore(newItemFirst, list.firstChild); // add elememt to list

var listItems = document.querySelectorAll('li'); // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                        // counter variable
for (i = 0; i < listItems.length; i++) {     // i = 0 so long as it is less than the list.Items length of items in the list loop through elements
  listItems[i].className = 'cool';           //as the i++ changes the number of i that list item which is the i number will change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');   //new variable heading = select the h2 element
var headingText =  heading.firstChild.nodeValue; //h2 text is the first child of h2 element
var totalItems = listItems.length;   //number of <li> elements list items length 
var newHeading = headingText + '<span>' + totalItems + '</span>'; // new heading content will equal heading text + span and + totalitems
heading.innerHTML = newHeading;// update H2