// Select the element and store it in a variable.
var elements = document.getElementsByClassName('hot');


if (elements.length > 2)  {

// Change the value of the class attribute.

    var el = elements [2];
    el.className = 'cool';

}