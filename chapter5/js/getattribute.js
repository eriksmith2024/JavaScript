var lastItem = document.getElementById('four'); // get the first list item

if (lastItem.hasAttribute('class')) {  // if it has the class item
    var attr = lastItem.getAttribute('class');// get the attribute

//add the value of the attribute 
    var el = document.getElementById('scriptResults')
    el.innerHTML = '<p>The last item has a class name: ' + attr + '</p>';
}