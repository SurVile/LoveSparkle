// Hide select -------------------------------------------------------

$('.option-list')
    .hide()
    .slideUp()
    .css({
        'visibility': 'visible'
    });

$(document).ready(function() {
    // Open menu list -------------------------------------------------------

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

    // Select working -------------------------------------------------------

    $('.select-clon').click(function() {
        let option_list_obj = $(this).children('.option-list')
            select_orig_obj = $(this).prev();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            option_list_obj
                .removeClass('active')
                .slideUp(400);
        } else {
            $(this).addClass('active');
            option_list_obj
                .addClass('active')
                .slideDown(400);
        }
    
        $(this).find('.option-clon').click(function() {
            let option_id = $(this).attr('id'),
                option_val = $(this).text();

            $(this).parents('.select-clon').find('.select-inner').text(option_val);
        
            select_orig_obj.find('option[value="' + option_id.split('Val', 1) + '"]').prop('selected', true);
        });
    });

    // Open item page -------------------------------------------------------

    $('.item-card').click(function() {
        window.location.href = 'item-page.html';
    });

    // Cart-window working

    $('.cart_icon').click(function() {
        $('.cart_area').addClass('active');

        $('.cart_area.active .cross-icon').click(function() {
            $('.cart_area').removeClass('active');
        });
    
        $('.cart_area.active > .dark-back').click(function() {
            $('.cart_area').removeClass('active');
        });
    });
});