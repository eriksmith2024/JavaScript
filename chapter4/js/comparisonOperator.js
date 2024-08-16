var pass = 50;
var score = 60;

var hasPassed = score >= pass;

var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;
