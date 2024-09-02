$('.slider').each(function() {                                  // for every slider
    var $this = $(this);                                        // get the current slider
    var $group = this.find('.slide-group');                      // get the slide group (container)
    var $slides = $this.find('.slide');                         //jQuery object to hold all slides
    var buttonArray = [];                                        // create an array button to hold nav buttons
    var currentIndex = 0;                                       // Index number of current slide
    var timeout;                                                //used to store the timer

    // move () the function to move the slides goes here 

    function advance() {                                        // Sets a timer between slides
        clearTimeout(timeout);                                     // clear timer stored in timeout
        // start timer to run an anonymous function every 4 seconds
        timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {           // If not the last slide
                move(currentIndex + 1);                          // move to the next slide
            } else {                                               // otherwise     
                move(0);                                         // move to the first slide
            } 
        }, 4000);                                                  // Milliseconds timer will wait
    }

    $.each($slides, function(index) {                            
        // create a button element for the button
        var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    })


    }
})