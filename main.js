
//QUOTE TRANSITION

$(document).ready(function() {

    //sequence of 0 to 2
    numberSequence = 0

    //shows up the first quote when page loads
    $('.main_quote div:eq('+numberSequence+')').stop().fadeIn(3000)

    //the function that makes things change
    function showNextQuote() {
        
        //fade out the next value and call the below function
        $('.main_quote div:eq('+numberSequence++ +')').stop().fadeOut(1500).queue(function() {

            //fade in the updated numberSequence value
            $('.main_quote div:eq('+numberSequence+')').fadeIn(2000).dequeue()
        })
      
      console.log(numberSequence)
      
      //if it gets bigger than 2, there is no quotes left to show. So its necessary to reset the value.
      if(numberSequence > 2) {
        numberSequence = 0
      }
    }

    //it calls the function to make it happen, within an defined interval.
    setInterval(function() {
      showNextQuote() 
    }, 5000)
})


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

    $('.leave_gallery').toggle().queue(function() {
       $('.see_more').slideToggle(600)
    }).dequeue()

    $(this).find('.hidden_gallery').finish().fadeToggle(300, 'easeOutCubic')
    $(this).siblings().finish().toggleClass('low_brightness')
    $(this).siblings().find('.hidden_gallery').finish().slideUp(800, 'easeOutCubic')
    $('.image_container').finish().toggleClass('low_brightness')

    $('.footer').toggle('blind', { direction: "down" }, toggleBars);
    $('.top_bar').toggle('blind', toggleBars);
})

$('.leave_gallery').click(function() {
    $(this).hide()
    $('.imgs_container').find('.hidden_gallery').finish().hide()
    $('.imgs_container').find('.main_img_selected').finish().show()
    $('.imgs_container').siblings().finish().removeClass('low_brightness')
    $('.image_container').finish().removeClass('low_brightness')
    $('.top_bar').toggle('blind', toggleBars);
    $('.footer').toggle('blind', { direction: "down" }, toggleBars);
    $('.see_more').slideToggle(300)
})

toggleBars = 250