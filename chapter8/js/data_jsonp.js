function showEvents(data) {                           // Callback when JSON loads
  var newContent = '';                                // Variable to hold HTML
 
    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    for (var i = 0; i < data.showEvents.length; i++) {   // Loop through object
      newContent += '<div class="showevent">';
      newContent += '<img src="' + data.showEventsevents[i].map + '" ';
      newContent += 'alt="' + data.showEventsevents[i].location + '" />';
      newContent += '<p><b>' + data.showEventsevents[i].location + '</b><br>';
      newContent += data.showEventsevents[i].date + '</p>';
      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}