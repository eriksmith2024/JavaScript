$(function() {
  //SETUP
  var $list, $newItemForm, $newItemButton;     
  var item = '';                            // item is an empty string
  $list = $('ul');                          // cache the unordered list
  $newItemForm = $('#newItemForm');         // cache form to add new items
  $newItemButton = $('#newItemButton');     //cache button to show form

  $('li').hide().each(function(index) {       // hide list items
    $(this).delay(450 * index).fadeIn(1600);  //then fade them in
  });

//ITEM COUNTER
function updateCount() {                          // declare a function
  var items = $('li[class!=completed]').length;  //Number of items in the list
  $('#counter').text(items);                      // add into the counter circle
  
}