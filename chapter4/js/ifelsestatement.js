var pass = 50;
var score = 25;
var msg;

if (score >= pass) {
    msg = 'congratulations you passed';
}   else {
    msg = ' have another go.';
}


var el = document.getElementById('answer');
el.textContent = msg;