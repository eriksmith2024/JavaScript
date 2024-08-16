var msg = '<h2>browser windwo</h2><p>width; '+ window.innerwidth + '</p>';
msg += '<p>height: '+ window.innnerHeight + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.history.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>'; 
var el = document.getElementById('info');
el.innerHTML = msg;
alert ('current page: ' + window.location);


