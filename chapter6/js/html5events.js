function setup() {
  var textInput;
  textInput = document.getElementById('message');
  textInput.focus('');
}
    window.addEventListener('DOMContentLoaded', setup, false);

    window.addEventListener('beforeload', function(event) {
      var message = 'Go make the salad';
      (event  || this.window.event).returnValue = message;
      return message;
    } );
