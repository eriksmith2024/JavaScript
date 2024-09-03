(function() {
    var form = document.getElementById('login');                // Get form element

    addEvent(form, 'submit', function(e) {              // when user submits form
        e.preventDefault();                             // stop it being sent
        var elements = this.elements;                   // get it all form elements
        var username = elements.username.value;         // select username entered
        var msg     = 'Welcome ' + username;             // create welmcome message
        document.getElementById('main').textContent = msg;  // write welcome message
    });
    }());