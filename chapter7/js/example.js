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
  var items = $('li[class!=complete]').length;  //Number of items in the list
  $('#counter').text(items);                      // add into the counter circle
}

updateCount();                                    // call the update count function

// SETUP FOR NEW ITEMS
$newItemButton.show();              // show the button
$newItemForm.hide();                // Hide the form
$('#showForm').on('click', function() {      // when the new item is clicked
  $newItemButton.hide();                          // hide the button
  $newItemForm.show();                            // show the form
});

// ADDING A NEW LIST ITEM
$newItemForm.on('submit', function(e) {     // when  new item is submitted
  e.preventDefault();                       // Prevent from being submitted
  var text = $('input:text').val();         // get value of text input
  $list.append('<li>' + text + '</li>');    // add item at the end of the list
  $('input:text').val('');                  //Empty the text input
  updateCount();                            // Update the circular count at the top of the list
});

// CLICK HANDLING - USES DELEGATION ON <UL> ELEMENT
$list.on('click', 'li', function() {
  var $this = $(this);                      //Cache the element in a jquery object
  var complete = $this.hasClass('complete'); //Is item complete
  
  if (complete === true) {                  // check if item is complete
    $this.animate({                        // if so animate opacity + padding
      opacity: 0.0,
      paddingLeft: '+=180'
  }, 500, 'swing', function() {           // use callback when animation completes
    $this.remove();                       // then completely remove this item
  });
} else {                                  //otherwise indicate it is complete
  item = $this.text();                    // Get the text from the list item
  $this.remove();                         // Remove the list item
  $list                                   // add to the end of the list as complete
    .append('<li class=\"complete\">' + item + '</li>')      
    .hide().fadeIn(300);                  // hide so can be faded in
  updateCount();                           // update the counter
}                                           // end of the else option
});                                         // End of the event handler
});