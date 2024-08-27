var xhr = new XMLHttpRequest();                 // Create XMLHtprequest object

xhr.onload = function() {                          // when response has loaded

    if (xhr.status === 200) {                                           // if server status is ok
        document.getElementById('content').innerHTML = xhr.responseText: // update
    }
};

xhr.open('GET', 'data/data.html', true);            // prepare request
xhr.send(null);                                     //send