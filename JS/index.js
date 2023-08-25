///<reference types="../@types/jquery/ ">
$(window).ready(function () {
const openNav=document.getElementById('openNav');
const slideLeft=document.getElementById('slideLeft');
//! ------------------------------------ close and open side bar------------------------------------> 
$(openNav).on('click',function(){
    $(slideLeft).animate({width:'toggle'},500);
    
} );


$('.icon').on('click',function(){
    $(slideLeft).animate({width:'toggle'},500);
    
} );

//! ------------------------------------slide inner down and up------------------------------------> 
$('.toggle').click(function() {
    
    $('.content').not($(this).next('.content')).slideUp(800);

   
    $(this).next('.content').slideToggle(800);
    });


//! ------------------------------------ counter down  ------------------------------------> 


   



  function countDown(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDown(countTo); }, 1000);
    console.log("hello")
  }
  countDown("10 october 2021 9:56:00");



//! ------------------------------------ count down charater------------------------------------> 
const charsnum = 100;
    $(".textarea").keyup(function ({target}) {
    const remain = charsnum - target.value.length;
    if( remain > 0){
        $(".num").text(remain);
    }else{
        $(".num").text("your available character finished");
    }
    
    });
});