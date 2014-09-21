$(function() {
    var $popups = $( '.popup' ),
        $popup1 = $( '.popup1__overlay' ),
        $popup1_btn = $( '.popup1__show' ),
        LOREM = '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni possimus cumque, minus ab rem perspiciatis perferendis aliquid labore earum. </p>';

    $popup1_btn.on('click', function() {
        $popups.hide();
        $popup1.show();
    });

    $popup1.on('click', function() {
        $popups.hide();
    });

    $popup1.children( '.popup1' ).on('click', function(e) {
        e.stopPropagation();
    });

    $( '.btn__add-content' ).on('click', function() {
        $(this).after(LOREM);
    });



});
