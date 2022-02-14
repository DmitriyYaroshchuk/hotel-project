let modal = document.querySelector ('#modal');
let modalButton = document.querySelector ('#modalButton');
let modalClose = document.querySelector ('#modalClose');
let curtain = document.querySelector ('#curtain');


modalButton.addEventListener('click',function () {
    modal.classList.add('modal-active');

});


modalClose.addEventListener('click',function () {
   modal.classList.remove('modal-active');
})

curtain.addEventListener('click',function () {
    modal.classList.remove('modal-active');
})




var header = $('.js-header'),
    cloneHeader = header.clone();


cloneHeader.addClass('header-fixed');
header.before(cloneHeader);


$(window).scroll(function() {

    console.log($(window).scrollTop());

    if ( $(window).scrollTop() > 50 ) {
        cloneHeader.addClass('header-show');
    } else {
        cloneHeader.removeClass('header-show');
    }

});

var headerFrom = $('.js-form'),
    cloneHeaderForm = headerFrom.clone();


cloneHeaderForm.addClass('header-form-fixed');
headerFrom.before(cloneHeaderForm);


$(window).scroll(function() {

    console.log($(window).scrollTop());

    if ( $(window).scrollTop() > 300 ) {
        cloneHeaderForm.addClass('header-form-show');
    } else {
        cloneHeaderForm.removeClass('header-form-show');
    }

});

