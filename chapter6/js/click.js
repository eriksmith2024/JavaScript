// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close x</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3am and 4am ';
msg += 'During this time, there may be minordisruptions to service.</div>';

var elNote = document.createElement('div'); // create a new element
elNote.setAttribute('id', 'note');    //add an id of note
elNote.innerHTML = msg;               //add the message
document.body.appendChild(elNote);     //add it to the page

function dismissNote() {                // declare the function
  document.body.removeChild(elNote);    // remove the note
}

var elClose = document.getElementById('close'); //Get the close button
elClose.addEventListener('click', dismissNote, false);  // click close-clear note
