
$(document).ready(function () {
    $(".load").click(function () {
        $(".toggle").show(700);
        $(".load").remove();
    });


    $('.owl-carousel-one').owlCarousel({
        loop: true
        , margin: 0
        , autoplay: true
        , center: true
        , dots: false
        , nav: false
        , autoplayHoverPause: true
        , autoplayTimeout: 1500
        , responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 4
            }
        }
    });
    
    
    $('body').scrollspy({ target: '.navbar' })
    
    $('.menu li a').click(function(e) {
  var $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
  }
  e.preventDefault();
});
    
    
    
    $('.owl-carousel').owlCarousel({
        loop: true
        , margin: 0
        , autoplay: true
        , dots: false
        , nav: false
        , autoplayHoverPause: true
        , autoplayTimeout: 3000
        , items: 1
    });
    
    $('.owl-carousel-test').owlCarousel({
        loop: true
        , margin: 0
        , autoplay: true
        , dots: true
        , autoplayHoverPause: true
        , autoplayTimeout: 3000
        , items: 1
    });


    $(".work_button").click(function () {
        $(".toggle_work").toggle(700);
    });

    
    $(".fancybox").fancybox();
    
    





});