
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
    $('.contact_window').toggleClass('contact_window_down')
    $('.click_out').toggle()
})
}


    $('.contact_button').click(function() {
        if($(window).width() < 670) {
            $('.contact_window').toggleClass('contact_window_down')
            console.log('hey')
            $('.click_out').hide()
            
            console.log('janela menor que 670')
        }
    })

$('.click_out').click(function() {
    $('.contact_window').toggleClass('contact_window_down')
    $('.click_out').hide()
})

$(".projects_button").click(function() {
    if($(window).width() > 670) {
        $('.projects').finish().toggleClass('project_up')
    } else {
        $('.projects').finish().toggleClass('project_up_responsive')
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
    $('.projects').finish().removeClass('project_up')
    $('.footer').finish().toggle('blind', { direction: "down" }, toggleBars);
    $('.top_bar').finish().toggle('blind', toggleBars);
    
    $(this).find('.hidden_gallery').find('img').toggleClass('change_project_height')
})

$('.leave_gallery').click(function() {
    $(this).hide()
    $('.imgs_container').find('.hidden_gallery').finish().fadeOut(300, 'easeOutCubic')
    $('.imgs_container').find('.main_img_selected').finish().show()
    $('.imgs_container').siblings().finish().removeClass('low_brightness')
    $('.image_container').finish().removeClass('low_brightness')
    $('.top_bar').finish().toggle('blind', toggleBars);
    $('.footer').finish().toggle('blind', { direction: "down" }, toggleBars);
    $('.see_more').finish().slideToggle(300)
    
    $(this).find('.hidden_gallery').find('img').toggleClass('change_project_height')
})

toggleBars = 250


function preloader() {
heavyImage = new Image();
heavyImage.src = "Assets/Images/woman.jpeg";
}

/* ======= */
