//Create variables for the new welcome message
var greeting = "Certainly Sir";
var name = " Erik";

var message = ", please check your order:";
//Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

//Create Variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementById('greeting');
//Replace the content of that element with the personalized welcome message
el.textContent = welcome;

//Get the element that has an id of userSign and then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//get the elememt that has an id of tiles then update its comtents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get the element that has an id of subTotal and then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Get the element that has an id of shipping and update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//Get the element that has an id of grandTotal and update its contents
var elgrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;


