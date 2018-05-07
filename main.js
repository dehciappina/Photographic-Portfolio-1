

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
        }
    })

$('.click_out').click(function() {
    $('.contact_window').hide('blind', 300)
    $('.click_out').hide()
    console.log('janela menor que 670')
})

$(".projects_button").click(function() {

    if($('.main_quote').is(':visible')) {

        $('.main_quote').slideUp()
        $('.projects').animate({
            top:'0'
        }, 300)
    }

    else {

        if($(window).width() > 670) {
            $('.main_quote').slideDown(300)
            $('.projects').animate({
                top:'46vh'
            }, 300)
        }

        else {
            $('.main_quote').slideDown(300)
            $('.projects').animate({
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
    $(this).find('.main_img_selected').toggle(200)
    $(this).find('.hidden_gallery').slideToggle(600, 'easeOutCubic')
    $(this).siblings().toggleClass('low_brightness')
    $(this).siblings().find('.hidden_gallery').slideUp(800, 'easeOutCubic')
    $('.image_container').toggleClass('low_brightness')
})


$('.leave_gallery').click(function() {
    $(this).hide()
    $('.imgs_container').find('.hidden_gallery').hide()
    $('.imgs_container').find('.main_img_selected').show()
    $('.imgs_container').siblings().removeClass('low_brightness')
    $('.image_container').removeClass('low_brightness')
})