$(function() {
    var $popups_overlay = $( '.popup__overlay' ),
        $popup1_overlay = $( '.popup1__overlay' ),
        $popup1_overlay_ie = $( '.popup1__overlay__ie' ),
        $popup1_btn = $( '.popup1__show' ),
        $popup2_overlay = $( '.popup2__overlay' ),
        $popup2_btn = $( '.popup2__show' ),
        $popup3_overlay = $( '.popup3__overlay' ),
        $popup3_btn = $( '.popup3__show' ),
        LOREM = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni possimus cumque, minus ab rem perspiciatis perferendis aliquid labore earum. </p>';

    $( '.btn__add-content' ).on('click', function() {
        $(this).after(LOREM);
    });

    $popup3_overlay.hide();
    
    $popup1_btn.on('click', function() {
        $popups_overlay.hide();
        $popup1_overlay.show();
    });
    if(!$popup1_overlay_ie) {
        $popup1_overlay_ie.on('click', function() {
            $popups_overlay.hide();
        });        
    } else {
        $popup1_overlay.on('click', function() {
            $popups_overlay.hide();
        });
    }

    $popup1_overlay.children( '.popup1' ).on('click', function(e) {
        e.stopPropagation();
    });

    $popup2_btn.on('click', function() {
        $popups_overlay.hide();
        $popup2_overlay.show();
    });

    $popup2_overlay.on('click', function() {
        $popups_overlay.hide();
    });

    $popup2_overlay.children( '.popup2' ).on('click', function(e) {
        e.stopPropagation();
    });

    $popup3_btn.on('click', function() {
        $popups_overlay.hide();
        $popup3_overlay.show();
    });

    $popup3_overlay.on('click', function() {
        $popups_overlay.hide();
    });

    $popup3_overlay.children( '.popup3' ).on('click', function(e) {
        e.stopPropagation();
    });


});
