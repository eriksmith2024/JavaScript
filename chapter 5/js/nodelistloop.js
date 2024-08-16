// Select the element and store it in a variable.
var hotItems = document.querySelectorAll('li.hot');

if (hotItems.length > 0) { // checks if contoins items for query select li.hot - should always check with if statement whether query returns items

        for (var i=0; i<hotItems.length; i++) {
            hotItems[i].className = 'cool';
        }

}






