$(document).ready(function() {
    // Open service description -------------------------------------------------------

    $('.service-line > h3').click(function() {
        if ($(this).children('.plus')
                .hasClass('active')) {
            $(this).children('.plus')
                .removeClass('active');
            $(this).parents('.service-point').removeClass('active');
                // .css({
                //     'height': 28 * 2 + 32
                // });
        } else {
            $(this).children('.plus').addClass('active');
            $(this).parents('.service-point').addClass('active');
                // .css({
                //     'height': 'auto'
                // });
        }
    });
});