$(function(){
  $(window).scroll(function() {
      var scroll = $(window).scrollTop(); // how many pixels you've scrolled
      console.log(scroll)
      if(scroll > os + ht){
          $('#div2').addClass('blue');
      }
  });
});