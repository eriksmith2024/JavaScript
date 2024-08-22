var elList,addLink, newEl, newText, counter, listItems;  //declare variables

elList = document.getElementById('list');         //get list
addLink = document.querySelector('a');            // get add item button
counter =  document.getElementById('counter');    // get item counter

function addItem (e) {                            // Declare function
  e.preventDefault();                              //prevent link action
  newEl = document.createElement('li');             // <> </> create new list item element
  newText = document.createTextNode('Cup of coffee');  // add new text node
  newEl.appendChild(newText);                           // add text node to list item
  elList.appendChild(newEl);                            // add list item to list
  updateCount();                       
}

function updateCount() {                                         //Declare function
  listItems = elList.getElementsByTagName('li').length;    //get total of list items
  counter.innerHTML = listItems;                                // update counter
}

addLink.addEventListener('click', addItem, false);        //click on button


