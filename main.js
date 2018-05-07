

if($(window).width() > 670) {
$('.contact_button').click(function() {
    $('.contact_window').finish().toggle('blind', 300)
    console.log('hey')
    $('.click_out').toggle()
})
}


    $('.contact_button').click(function() {
        if($(window).width() < 670) {
            $('.contact_window').finish().toggle('blind', 300)
            console.log('hey')
            $('.click_out').hide()
            
            console.log('janela menor que 670')
        }
    })

$('.click_out').click(function() {
    $('.contact_window').hide('blind', 300)
    $('.click_out').hide()
})

$(".projects_button").click(function() {

    if($('.main_quote').is(':visible')) {

        $('.main_quote').slideUp()
        $('.projects').finish().animate({
            top:'0'
        }, 300)
    }

    else {

        if($(window).width() > 670) {
            $('.main_quote').slideDown(300)
            $('.projects').finish().animate({
                top:'46vh'
            }, 300)
        }

        else {
            $('.main_quote').slideDown(300)
            $('.projects').finish().animate({
                top:'42.5vw'
            }, 300)
        }
    }
})

var scrollNumber = $('.projects').scrollTop()
console.log(scrollNumber)


$('.imgs_container').click(function() {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 53 + '%',
    }, 400);

    $('.leave_gallery').toggle()
})

$('.imgs_container').click(function() {
    $(this).find('.hidden_gallery').finish().fadeToggle(600, 'easeOutCubic')
    $(this).siblings().finish().toggleClass('low_brightness')
    $(this).siblings().find('.hidden_gallery').finish().slideUp(800, 'easeOutCubic')
    $('.image_container').finish().toggleClass('low_brightness')
})


$('.leave_gallery').click(function() {
    $(this).hide()
    $('.imgs_container').find('.hidden_gallery').finish().hide()
    $('.imgs_container').find('.main_img_selected').finish().show()
    $('.imgs_container').siblings().finish().removeClass('low_brightness')
    $('.image_container').finish().removeClass('low_brightness')
})