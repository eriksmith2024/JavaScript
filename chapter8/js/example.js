$(function() {                                      // when the DOM is ready

    var times;                                      //declare global variable
    $.ajax({                                        // set up request
        beforeSend: function(xhr){                  //before requesting data
            if (xhr,overideMimeType) {              // if supported
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