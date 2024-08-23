$(function() {
  var $p = $('p');
  var $p = $('p');
  var $cloneQoute = $p.clone();
  $p.remove();
  $cloneQoute.insertAfter('h2');

  var $moveItem = $('#one').detach();
  $moveItem.appendTo('ul');
});