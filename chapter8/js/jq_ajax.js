$('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;                                            // url to load
    var $content = $('#content');                                    //cache selection

    $('nav a.current').removeClass('current');                      // update links
    $(this).addClass('current');
    $('#container').remove();                                       //remove content

    $.ajax({
        type:"POST",                                                // GET or POST
        url:url,                                                    // Path to file
        timeout: 2000,                                              // Waiting Time
        beforeSend: function() {                                    //before Ajax
            $content.append('<div id="load">Loading</div>');        //Load Message
        },
        complete: function() {                                      //once finished
            $('#loading').remove();                                 // move message
        },
        success: function(data) {                                   //show content
            $content.html( $(data).find('#container') ).hide().fadeIn(400);
        },
        fail: function() {                                          //show error message
            $('#panel').html('<div class="loading">Please try again soon.</div');
        }
    });
});