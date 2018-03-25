import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
$('.page2').hide();
$('#career').click(function(){
  $('.page2').show();
  $('.page1').hide();
})
$('#index').click(function(){
  $('.page1').show();
  $('.page2').hide();
})

$('.carousel').carousel({
    interval: 9000
  })
/* btn.text('bcmzz') */
