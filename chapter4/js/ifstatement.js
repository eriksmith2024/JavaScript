var score = 55;
var msg;

if (score >= 50) {
    msg = ' Congratulations!';
    msg += ' proceed to the next round.';
}

var el = document.getElementById('answer');
el.textContent = msg;