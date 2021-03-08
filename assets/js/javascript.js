$(document).ready(function(){
    
    var top = $('.header_top');

    $('.open').click(function(){
        $(top).css('display', 'none');
    });
    $('.btn').click(function(){
        $(top).css('display', 'block');
    });

    /* works*/
    $('.side').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.ranY').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
    
    
    /* Accessories*/
    $('.next').hide();
    $('#all').click(function(){
        $('.item').show();
    });
    
    $('#yarn_tag').click(function(){
        $('.yarn').show();
        $('.hook').hide();
        $('.ribbons').hide();
        $('.needles').hide();
    });
    
    $('#hook_tag').click(function(){
        $('.yarn').hide();
        $('.hook').show();
        $('.ribbons').hide();
        $('.needles').hide();
    });
    
    $('#ribbons_tag').click(function(){
        $('.yarn').hide();
        $('.hook').hide();
        $('.ribbons').show();
        $('.needles').hide();
    });
    
    $('#needles_tag').click(function(){
        $('.yarn').hide();
        $('.hook').hide();
        $('.ribbons').hide();
        $('.needles').show();
    });
    
    $('#next').click(function(){
        $('.next').toggle();
    });
    
    /* life*/ 
    
    $('.origin_text').slick();
    
    $(window).scroll( function(){
        
        $('.fade-in').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });
    
    /* back to top*/ 
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.scrollTop').fadeIn();
        }else{
            $('.scrollTop').fadeOut();
        }
    });
    
    $('#btn').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 100);
    });

    /*model*/ 
    var model = $('#myModel');
    var model2 = $('#myModel2');
    var model3 = $('#myModel3');

    $('#myDownload').click(function(){
        $(model).css('display', 'block');
    });
    $('#myDownload2').click(function(){
        $(model2).css('display', 'block');
    });
    $('#myDownload3').click(function(){
        $(model3).css('display', 'block');
    });

    $('.model_body').click(function(){
        $(model).css('display', 'none');
    });
    $('.close').click(function(){
        $(model2).css('display', 'none');
    });
    $('.close').click(function(){
        $(model3).css('display', 'none');
    });

    /* Contact*/ 
    $('#submit').click(function(){
        alert('Your information has been send');
    });

    /*yarn1*/
    var dt = $('.details');
    $('.details').hide();
    $('#accordion').click(function(){
        $(dt).slideToggle('slow');
    }); 

    /*cart*/ 
    var cart = 0;
    
    $('.plus-btn').click(function(){
        cart = cart + 1;
        $('.number').val(cart);
    });


    $('.minus-btn').click(function(){
        cart = cart - 1;
        $('.number').val(cart);
    });      

});

/*header */
function openNav(){
    var x = document.getElementById('myBar');

          x.style.width="50%";
}

function closeNav(){
    var x = document.getElementById('myBar');

          x.style.width="0";
} 


/* life*/ 
function openColor(colorName){
    var i, tabcontent;
    
    tabcontent = document.getElementsByClassName('tabcontent');
    
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
    
    document.getElementById(colorName).style.display="block";
}

document.getElementsByClassName('first')[0].style.display='block';

$('.like-btn').on('click', function(){
    $(this).toggleClass('is-active');
});