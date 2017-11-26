$(document).ready(function(){

    // -----BOARD PAGE ---------

    $(".board a:focus").keypress(function(e){
        if (e.which == 13) {
            $(this).click();
        }
    });

    //--------------------------

});