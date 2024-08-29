$(document).ready(function() {
  console.log('jQuery loaded');  // This should print when the DOM is ready

  // Variables to track votes for each t-shirt color
  var voteCounts = {
    gray: 0,
    yellow: 0,
    green: 0
  };

  // Add click event listeners to t-shirt images
  $('#vote a').on('click', function(e) {
    e.preventDefault();  // Prevent the default action of the anchor tag

    var selectedColor = $(this).data('color');  // Get the color from data attribute
    voteCounts[selectedColor]++;  // Increment the vote count for the selected color

    // Update the vote count display
    $('#' + selectedColor + '-count').text(voteCounts[selectedColor]);

    // Optional: If you still want to send the vote to the server, you can use this
    var queryString = 'vote=' + selectedColor;
    $.get('/php/votes.php', queryString, function(data) {
      // Handle the server response if needed
      console.log(data);
    });
  });
});
