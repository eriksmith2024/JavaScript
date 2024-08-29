$('nav a').on('click', function(e) {                                   //user clicks nav link
  e.preventDefault();                                                  //stop loading new link
  var url = this.href;                                                  // get value of href

  $('nav .current').removeClass('current');                            //clear current indicator
  $(this).addClass('current');                                       // new current indicator

  $('#container').remove();                                          //remove old content
  $('#content').load(url + ' #content').hide().fadeIn('slow');       // new content

});