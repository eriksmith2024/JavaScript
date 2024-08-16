var today = new Date ();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy; ' + year + '</p>';

var msg ='<h2>Date</h2><p>' + today.toDateString() + '</p>';
msg += '<h2>Time</h2><p>' + today.toTimeString() + '</p>';
msg += '<h2>Day</h2><p>' + today.getDay() +'</p>';
msg += '<h2>Month</h2><p>' + (today.getMonth() + 1) +'</p>';
msg += '<h2>Year</h2><p>' + today.getFullYear () +'</p>';

var el = document.getElementById('info');
el.innerHTML = msg;