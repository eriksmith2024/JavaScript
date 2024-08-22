$(function()  {
    $('li:contains("pine")').text('cherries');
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
$('li#one').remove();
})