var xhr = new XMLHttpRequest();             // Create XMLHttp Request

xhr.onload = function() {                   // When response has loaded
                                              //The following conditional check will not work locally
    if (xhr.status === 200) {                   // if server status is ok

// THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
var response = xhr.responseXML;                     // Get XML from the server
var events = response.getElementsByTagName('event');    // find event elements

for (var i = 0; i < events.length; i++ {            // loop through them
    var container, image, location, city, newline;  // declare variables
    container = document.createElement('div');      // Create Div container
    container.className = 'event';                  // Add class attribute

    image = document.createElement ('img');         // Add map image
    image.setAttribute('src', getNoveValue(events[i], 'map'));
    image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
    container.apppendChild(image);

    location = document.createElement('p');         // Add location data
    city = document.createElement('b');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], date)));
    container.appendChild(location);

    document.getElementById('content').appendChild(Container);
}
function getNodeValue(obj, tag) {                       // gets content from xml
    return obj.getElementsByTagName(tag) [0].firstChild.nodeValue;

// The final part is the same as the HTML example except it requests an XML file
}
};
xhr.open('GET', 'data/data.xml', true);     // prepare the request
xhr.send(null);                                // send the request