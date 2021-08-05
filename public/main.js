
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
             $(`.schedule-item:eq(${i})`).children().css('flex-direction','row-reverse')
            $(`.schedule-item > .schedule-row:eq(${i})`).children().first().children().addClass('schedule--right-revert-ie')
            $(`.schedule-item > .schedule-row:eq(${i})`).children().last().children().addClass('schedule--right-revert-text')
           
            //  $(`.wraper-tap-list-schedule > ul > li > .schedule-demo:eq(${i})`).children('.schedule-r').css('border-left','none')
            // $(`.wraper-tap-list-schedule > ul > li:eq(${i})`).children('.schedule-tap-list-user-r').css('border-right','4px solid #fb0')
            // $(`.wraper-tap-list-schedule > ul > li:eq(${i})`).children('.schedule-tap-list-user-l').css("flex-direction","row-reverse")
            // $(`.wraper-tap-list-schedule > ul > li:eq(${i})`).children('.schedule-tap-list-user-l').css("margin-right","0")
            // $(`.wraper-tap-list-schedule > ul > li:eq(${i})`).children('.schedule-tap-list-user-l').css("margin-left","50px")
            // $(`.wraper-tap-list-schedule > ul > li:eq(${i})`).children('.schedule-tap-list-user-l').children('img').css("margin-left","0")
            // $(`.wraper-tap-list-schedule > ul > li:eq(${i})`).children('.schedule-tap-list-user-l').children('img').css("margin-right","10px")
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
})


$('.row.custom-row')

function move(number){
    $('.row.custom-row')
    console.log('o');
}

