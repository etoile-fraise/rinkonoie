/* cart*/
$(document).ready(function(){

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

$('.like-btn').on('click', function(){
    $(this).toggleClass('is-active');
});

// $('minus-btn').on('click', function(e){
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if(value > 1){
//         value = value - 1;
//     }else{
//         value = 0;
//     }

//     $input.val(value);
// });

// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     value$this = $(this);
//     value$input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if(value < 100){
//         value = value + 1;
//     }else{
//         value = 100;
//     }

//     $input.val(value);
// });