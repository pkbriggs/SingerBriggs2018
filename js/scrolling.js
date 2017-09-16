let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('.page-nav').outerHeight();

$(function() {
  $(window).on('scroll', function(){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    let st = $(window).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.page-nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).innerHeight()) {
            $('.page-nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
  }
});
