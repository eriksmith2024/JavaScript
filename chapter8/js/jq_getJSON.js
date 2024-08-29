$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
    $.getJSON('data/rates.json')
    .done(function(data) { // Server returns data
        var d = new Date(); // Create date object
        var hrs = d.getHours(); // Get hours
        var mins = d.getMinutes(); // Get mins
        mins = mins < 10 ? '0' + mins : mins; // Add leading zero to minutes if needed
        var msg = '<h2>Exchange Rates</h2>'; // Starts message
        $.each(data, function(key, val) {
            msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
        });
        msg += '<br>Last update: ' + hrs + ':' + mins + '<br>'; // Show update time
        $('#rates').html(msg); // Add rates to page
    })
    .fail(function() { // If there is an error
        $('#exchangerates').append('<p>Sorry, we cannot load rates.</p>'); // Show error message
    })
    .always(function() { // Always runs
        var reload = '<a id="refresh" href="#"><img src="img/refresh.png" alt="refresh"></a>'; // Add refresh link
        $('#reload').html(reload); // Add refresh link
        $('#refresh').on('click', function(e) { // Add click handler
            e.preventDefault(); // Stop link from redirecting
            loadRates(); // Call loadRates again
        });
    });
}

loadRates();
