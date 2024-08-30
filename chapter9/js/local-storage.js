if (window.localstorage) {

var txtUsername = document.getElementById('username');  //get form elements
var textAnswer = document.getElementById('answer');      

txtUsername.value = localStorage.getItem('username');  //Elements populated
textAnswer.value = localStorage.getItem('answer');     //by local storage data

txtUsername.addEventListener('input', function () {     // data saved
    localStorage.setItem('answer', textAnswer.value);
    }, false);
}