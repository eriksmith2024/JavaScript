// helper function to add an event listener
function addEvent(el, event, callback) {
    if ('addEventListener' in el) {                           // if addEvent listener works
      el.addEventListener(event, callback, false);                      // use it
} else {                                                                // otherwise
    el[event + callback] = function() {                                 // add a second method
        el ['e' + event + callback](window.event);                      // Use it to call previous function
    };
    el.attachEvent('on' + event, el [event + callback]);       // use attach eventto call the 2nd function which then calls the 1st one
    }
}