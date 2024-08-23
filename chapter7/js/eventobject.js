$(function() {
  $('li').on('click', function(e){
    // Remove any previously added <span> elements
    $('li span').remove();

    // Get the current date
    var date = new Date();
    var clicked = date.toDateString();

    // Append the date and event type to the clicked <li> element
    $(this).append('<span class="date"> ' + clicked + ' ' + e.type + '</span>');
  });
});
