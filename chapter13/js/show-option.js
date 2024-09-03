(function(){
    var form, options, other, otherText, hide;      // declare cariables
    form = document.getElementById('how-heard');        // get the form
    options = form.elements.heard;        // get the radio button
    other = document.getElementById('other');      // other radio button
    otherText = document.getElementById('other-Text');  // other text
    otherText.className = 'hide';               // hide other text input

    for (var i = [0]; i <options.length; i++) {     // loop through radio buttons
        addEvent(options[i], 'click', radioChanged);       //Add event listener
    }
    function radioChanged() {
        hide = other.checked ? '' : 'hide';     // is other checked
        otherText.className = hide;     // text input visibility
        if (hide) {                     // if text input is hidden
            otherText.value = '';           // empty its contents 
        }
    }
}());