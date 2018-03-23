import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
$('.page2').hide();
let btn = $('button')
$('#career').click(function(){
  $('.page2').show();
  $('.page1').hide();
})
$('#index').click(function(){
  $('.page1').show();
  $('.page2').hide();
})

console.log(btn)
$('.carousel').carousel({
    interval: 9000
  })
/* btn.text('bcmzz') */
