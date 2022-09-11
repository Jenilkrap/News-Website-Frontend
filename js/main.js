$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /**click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        dots:false,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });


});
