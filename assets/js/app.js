$(document).ready(function () {
    $(".parentslider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
    $('.parent-rtl').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrow: false,
        dots: false,
        rtl: true,
        speed: 300,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});