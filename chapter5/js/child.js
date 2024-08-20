// select the starting point and find its siblings
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

//change the values of the childrens class attributes
firstItem.className = 'complete';
lastItem.className = 'cool';


