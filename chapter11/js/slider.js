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
        if(index === currentIndex) {                                  // If index is the current item
            $button.addClass('active');                               // Add the active class
        }
        $button.on('click', function() {                              // Create an event handler for the button
            move(index);                                               // it calls the move function
        }).appendTo('.slide-buttons');                                 //Add to the buttons holder
        buttonArray.push($button);                                     // Add it to the button array
    });

    advance();                                  // Script is set up - call advance() tio start timer
});

function move(newIndex) {                       // creates the slide from the old to the new one
    var animateLeft, slideLeft;                 //Declares the variables

    advance();                                  // When slide moves call adance() function again

    // If current slide is showing or a slide is animating then do nothing
    if ($group.is(':animated') || currentIndex === newIndex ) {
        return;
    }

    buttonArray[currentIndex].removeClass('active');                // remove active class from item
    buttonArray[newIndex].addClass('active');                       // add class to the new item

    if (newIndex > currentIndex) {                                  // if new item is less than current
        slideLeft = '100%';                                         //sit the new slide to the right
        animateLeft = '-100%';                                      //animate the current group to the left
    }   else {                                                      // otherwise
        slideLeft ='-100%';                                         // sit the new slide to the left
        animateLeft = '100%';                                       // Animate the current group to the right
    }
    // position the new slide to the left (if less) or the right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
    $group.animate( {left: animateLeft}, function() {                   //animates slides and
        $slides.eq(currentIndex).css( { display: 'none'} );             // Hide previous slides
        $slides.eq(newIndex).css( {left: 0} );                             //set position of new item
        $group.css( {left: 0} );                                        //set position of group of slides
        currentIndex = newIndex;                                        // set currentIndex to new imahe
    });
}

