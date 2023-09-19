$(document).ready(function() {
    // Open menu list

    $('.catalog_button').mouseenter(function() {
        $(this).children('.arrow').addClass('active');
        $('.main-menu').addClass('active');
        console.log('Menu is opened');

        let full_header_height = $('.main-menu').height() + $('header.global').height();
        console.log(full_header_height);

        $(document).mousemove(function(mouse_event) {
            if (mouse_event.clientY > full_header_height) {
                $('.catalog_button .arrow').removeClass('active');
                $('.main-menu').removeClass('active');
            }
        });
    });

    // Open service description

    $('.service-line > h3').click(function() {
        if ($(this).children('.plus').hasClass('active')) {
            $(this).children('.plus').removeClass('active');
            $(this).parents('.service-point').removeClass('active');
        } else {
            $(this).children('.plus').addClass('active');
            $(this).parents('.service-point').addClass('active');
        }
    });
});