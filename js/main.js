$(document).ready(function(){

    // -----BOARD PAGE ---------

    $(".board a").keypress(function(e){
        console.log("yo yo");
        if (e.which == 13) {
            $(this).click();
        }
    });

    //--------------------------

});