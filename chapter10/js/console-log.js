console.log('And we\'re off...');                   // indicates script is running
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {        //When input loses focus
    console.log('You entered', this.value);                 // write value to console
});

$('#calculator').on('submit', function(e) {                 //when the user clicks submit 
    e.preventDefault();                                     //prevent form from submitting
    console.log('Clicked submit...');                       //Indicate button was clicked

    width = $('#width').val();
    console.log('Width ' + width);                          // write width to the console

    height = $('#height').val();                            // write height to console
    console.log('Height ', height);                         //write height to console

    area = width * height;
    console.log(area);                                         // write area to console

})