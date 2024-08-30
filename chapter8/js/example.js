$(function() {                                      // when the DOM is ready

    var times;                                      //declare global variable
    $.ajax({                                        // set up request
        beforeSend: function(xhr){                  //before requesting data
            if (xhr.overrideMimeType) {              // if supported
                xhr.overrideMimeType("application/json") // set MIME to prevent errors
            }
        }
    });

    // Function that collectes the data from the JSON file
    function loadTimetable() {                          // declare variable
        $.getJSON('data/example.json')                  //Try to collect JSON data
        .done( function(data){                          //if successful
          times = data;                                  // store it in a variable
        }).fail( function() {                           // If a problem show message
            $('#event').html('Sorry! We could not load the timetable at the moment');
        });
    }

    loadTimetable();                                        // call the function

    // click on the event to load a timetable
    $('#content').on('click', '#event a', function(e) {
        e.preventDefault();
        var loc = this.id.toUpperCase();
    
        var newContent = '';
        for (var i = 0; i < times[loc].length; i++) {
            newContent += '<li><span class="time">' + times[loc] [i].time + '</span>';
            newContent += '<a href="descriptions.html#';
            newContent += times[loc][i].title.replace(/ /g, '-') + '">';
            newContent += times[loc][i].title +'</a></li>';
        }
        $('#sessions').html('<ul>' + newContent + '</ul>'); // display time

        $('#event a.current').removeClass('current');
        $(this).addClass('current');

        $('#details').text('');
    });

    // Click on session to load a description
    $('#content').on('click', '#sessions li a', function(e) {
        e.preventDefault();
        var fragment = this.href;

        fragment = fragment.replace('#','#');
        $('#details').load(this.href);

        $('#sessions a.current').removeClass('current');
        $(this).addClass('current');
    });

    // click on primary navigation 
    $('nav a').on('click', function(e) {
        e.preventDefault();
        var url = this.href;

        $('nav a.current').removeClass('current');
        $(this).addClass('current');

        $('#container').remove();
        $('#content').load(url + ' #container').hide().fadeIn('slow');
    });

});