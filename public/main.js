
// let day = 365
// let hours = day * 24
// let minutes = hours * 60
let time = 31536000
let hour = 24
let minute = 60
setInterval(function(){
    couterTime()
},1000)


function couterTime(){
    let seconds = time % 60
    if(seconds===0){
        --minute
        if(minute===0){
            minute=60
            --hour
            if(hour==0){
                hour=24
            }
        }
    }

    let day = Math.floor(time/86400)
    time--
    // console.log(`Day: ${day}| Hours: ${hour} | Minutes: ${minute} | Seconds: ${seconds}`);
   $("#clock-days").text(day)
   $("#clock-hours").text(hour)
   $("#clock-minutes").text(minute)
   $("#clock-seconds").text(seconds)

}

$(document).ready(function(){


    const length_tap_list = $('.schedule-item').length
    for(let i = 0 ; i < length_tap_list;i++){
        if(i%2!==0){
           
           
        }
    }




    $('.schedule-tap-bar-item').click(function(){
       const id_target = $(this).attr('data-show-tap')
       $(`.wraper-tap-list-schedule`).removeClass('schedule-tap-active')
       $(`${id_target}`).addClass('schedule-tap-active')
       $('.schedule-tap-bar-item').removeClass('schedule-active')
       $(this).addClass('schedule-active')
    })


    $('.The-Concert-Venue-btn-tour-the-venue').click(function(){
        $('.modal').show()  
    })
    $('.modal, .if-modal-title-close').click(function(){
       $('.modal').hide(100)
       console.log(this);
    })  
    $('.if-modal').click(function(e){
        e.stopPropagation();
    })

    $('.The-Concert-Venue-btn-venue-details').click(function(){
        $('.modal-venlue-details').show()
    })


    $('.modal-venlue-details-container').click(function(e){
        e.stopPropagation()
    })

    $('.modal-venlue-details').click(function(e){      
            $('.modal-venlue-details').hide(100)  
    })

    $('.if-modal-title-close').click(function(e){
        
            $('.modal-venlue-details').hide(100) 
        
    })


    $('.my-navbar-icon').click(function(){
       $('.nav-bar-sm').toggleClass('toggle-nav-bar-sm')
       $('.nav-moda-reponsive').toggle()
    })
    $('.nav-bar-sm-brand-icon-close').click(function(){
        $('.nav-bar-sm').removeClass('toggle-nav-bar-sm')
       $('.nav-moda-reponsive').toggle()
    })
    $('.nav-moda-reponsive').click(function(){
        $('.nav-bar-sm').removeClass('toggle-nav-bar-sm')
        $('.nav-moda-reponsive').toggle()
    })

    $('.nav-bar-sm-items_icon').click(function(){
        $(this).parent().siblings().slideToggle("slow");
    })




    $('.carousel-left').on('click',function(){
        $('.carousel-v2 .row-no-wrap').animate({
            left:'-50%'
        },'slow',function(){
            $('.carousel-v2 .row-no-wrap').append($('.carousel-v2 .row-no-wrap').children().first())
            $('.carousel-v2 .row-no-wrap').css('left','auto')
        })
    })

    $('.carousel-right').on('click',function(){
        $('.carousel-v2 .row-no-wrap').animate({
            right:'-50%'
        },'slow',function(){
            $('.carousel-v2 .row-no-wrap').prepend($('.carousel-v2 .row-no-wrap').children().last())
            $('.carousel-v2 .row-no-wrap').css('right','auto')
        })
    })
    
    
})
function scroll_to_fix_navbar(){

    
    if($(document).width() >= 992)
    {
       if($('html').scrollTop() >= 500)
       {
           $('.my-container').addClass('my-container-bg')
           $('.my-navbar').addClass('navbar-fix-lg ')
   
           $('.nav-cart').removeClass('cart-plus')
           $('.nav-cart').addClass('cart-plus-fix')
   
           $('.nav-login').addClass('login-fix')
           $('.nav-logout').addClass('logout-fix')
       }
       else{
           $('.my-container').removeClass('my-container-bg')
           $('.my-navbar').removeClass('navbar-fix-lg')
           $('.nav-cart').addClass('cart-plus')
           $('.nav-cart').removeClass('cart-plus-fix')
           $('.nav-login').removeClass('login-fix')
           $('.nav-logout').removeClass('logout-fix')
       }

   }
}








